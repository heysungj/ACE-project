const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

// for aws to save photos
const multer = require("multer");

// setup multer middleware to parse form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id.toString() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage, limits: { fieldSize: 5000 } });

// POST /api/users
router.post("/", usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.login);
// POST /api/users/newBlog
router.post("/newBlog", upload.array("photo"), usersCtrl.createBlog);
// GET /api/users/blogs
router.get("/blogs", usersCtrl.findBlogs);
// PUT /api/users/blogs/:id
router.put("/blogs/update/:id", upload.array("photo"), usersCtrl.editBlog);
// DELETE /api/users/blogs/delete/:id
router.delete("/blogs/delete/:id", usersCtrl.deleteBlog);
// GET /api/users/check-token
// router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
