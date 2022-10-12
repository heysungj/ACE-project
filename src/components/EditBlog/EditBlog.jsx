import { useState } from "react";
import * as blogAPI from "../../utilities/users-api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../utilities/users-service";
import "./EditBlog.css";

export default function EditClass({ blog, blogList, setBlogList, closeModal }) {
  const navigate = useNavigate();
  const [editedBlog, setEditedBlog] = useState({
    title: blog.title,
    content: blog.content,
    photo: blog.photo,
  });

  // handle change
  const handleChange = (e) => {
    let updatedBlog = { ...editedBlog };

    if (e.target.files) {
      let newPhoto = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newPhoto.push(e.target.files[i]);
      }
      updatedBlog[e.target.name] = newPhoto;
    } else {
      updatedBlog[e.target.name] = e.target.value;
    }

    setEditedBlog(updatedBlog);
    console.log("updated Blog", updatedBlog);
  };

  //   update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, photo, content } = editedBlog;
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < editedBlog.photo.length; i++) {
      formData.append("photo", photo[i]);
    }

    formData.append("content", content);
    console.log("edited formdata", formData);
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const updatedClass = await axios.put(
      `/api/users/blogs/update/${blog._id}`,
      formData,
      config
    );
    console.log("updated class", updatedClass);
    navigate(0);
  };

  //   delete class
  const handleDelete = async () => {
    const deletedBlog = await blogAPI.deleteBlog(blog._id);
    console.log("deleted blog", deletedBlog);
    let restBlogs = blogList.filter((blog) => {
      if (deletedBlog.id !== blog.id) {
        return true;
      }
    });
    setBlogList(restBlogs);
    closeModal();
  };

  return (
    <div>
      <div className="modalContainer">
        <label>Title</label>
        <input
          className=""
          type="text"
          name="title"
          value={editedBlog.title}
          onChange={handleChange}
          required
        />
        <label>Blog Content</label>
        <textarea
          name="content"
          value={editedBlog.content}
          onChange={handleChange}
          required
        />

        <label>Photo</label>
        <input
          className="fileBorder"
          type="file"
          name="photo"
          onChange={handleChange}
          multiple
          required
        />
        <div className="flexRow">
          <button onClick={handleSubmit} className="btn btn-primary">
            Update Blog
          </button>
          <button onClick={handleDelete} class="btn btn-danger">
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
}
