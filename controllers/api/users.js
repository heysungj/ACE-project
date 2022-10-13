const User = require("../../models/user");
const Blog = require("../../models/blog");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AWS = require("aws-sdk");
const fs = require("fs/promises");

// Set the region for AWS
AWS.config.update({ region: "us-east-1" });
// // Create S3 service object
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// export modules
module.exports = {
  create,
  login,
  checkToken,
  findBlogs,
  editBlog,
  deleteBlog,
  createBlog,
};

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

// create new blog
async function createBlog(req, res) {
  try {
    // reg ex to match
    const re = `${req.user._id.toString()}`;
    const regex = new RegExp(re);
    const photoUrls = [];

    const allFiles = await fs.readdir("uploads/");
    // find all files including same user id
    const matches = allFiles.filter((filePath) => {
      return filePath.match(regex);
    });

    const numFiles = matches.length;
    if (numFiles) {
      // Read in the file, convert it to base64, store to S3
      for (let i = 0; i < numFiles; i++) {
        await readFile(matches[i], photoUrls);
      }

      for (let i = 0; i < numFiles; i++) {
        await removeFile(matches[i]);
      }
    }
    // create new blog
    let addedBlog = new Blog(req.body);
    addedBlog.photo = photoUrls;
    await addedBlog.save();
    return res.json(addedBlog);
  } catch (error) {
    console.log("Error loading temp folder");
    res.json({ error });
  }
}
// find all blogs
async function findBlogs(req, res) {
  const blogs = await Blog.find();
  res.json(blogs);
}

// edit the blog
async function editBlog(req, res) {
  try {
    // reg ex to match
    const re = `${req.user._id.toString()}`;
    const regex = new RegExp(re);
    const photoUrls = [];

    const allFiles = await fs.readdir("uploads/");

    const matches = allFiles.filter((filePath) => {
      return filePath.match(regex);
    });

    const numFiles = matches.length;
    if (numFiles) {
      // Read in the file, convert it to base64, store to S3
      for (let i = 0; i < numFiles; i++) {
        await readFile(matches[i], photoUrls);
      }

      for (let i = 0; i < numFiles; i++) {
        await removeFile(matches[i]);
      }
    }

    const editedBlog = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
      title: editedBlog.title,
      content: editedBlog.content,
      photo: numFiles > 0 ? photoUrls : editedBlog.photo,
    });
    return res.json(updatedBlog);
  } catch (error) {
    console.log("Error loading temp folder");
    res.json({ error });
  }
}

// delete all blog
async function deleteBlog(req, res) {
  const deletedBlog = await Blog.findByIdAndRemove(req.params.id);
  res.json(deletedBlog);
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

// aws setting up

const readFile = async (file, urlArr) => {
  try {
    const fileResult = await fs.readFile("uploads/" + file);

    // Buffer Pattern; how to handle buffers; straw, intake/outtake analogy
    const base64data = new Buffer(fileResult, "binary");
    try {
      const result = await s3
        .upload({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file,
          Body: base64data,
        })
        .promise();
      console.log(`File upload to S3 successfully at ${result.Location}`);
      urlArr.push(result.Location);
    } catch (e) {
      console.log("Error uploading file to S3", e);
    }
  } catch (e) {
    console.log("Error reading temp files", e);
  }
};

const removeFile = async (file) => {
  await fs.rm("uploads/" + file);
};
