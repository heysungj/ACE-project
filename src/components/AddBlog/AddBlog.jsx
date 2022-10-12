import { useState } from "react";
import axios from "axios";
import { getToken } from "../../utilities/users-service";
import "./AddBlog.css";

export default function AddBlog({ blogList, closeModal }) {
  const [newBlog, setNewBlog] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    // e.target.files is a list of object
    if (e.target.files) {
      // push files into the newPhoto Array
      let newPhoto = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newPhoto.push(e.target.files[i]);
      }
      console.log("newphoto", newPhoto);
      const blog = {
        ...newBlog,
        [e.target.name]: newPhoto,
      };

      setNewBlog(blog);
    } else {
      const blog = {
        ...newBlog,
        [e.target.name]: e.target.value,
      };

      setNewBlog(blog);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, photo, content } = newBlog;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", photo);
    formData.append("content", content);
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const addedBlog = await axios.post(`/api/users/newBlog`, formData, config);
    console.log("added Blog", addedBlog);

    blogList.push(addedBlog.data);
    closeModal();
  };

  return (
    <div>
      <form onSubmit={async (e) => handleSubmit(e)}>
        <div className="modalContainer">
          <label>Blog Title</label>
          <input
            className=""
            type="text"
            name="title"
            onChange={handleChange}
            required
          />

          <label>Blog Content</label>
          <textarea name="content" onChange={handleChange} required />

          <label>Photo</label>
          <input
            type="file"
            name="photo"
            className="fileBorder"
            onChange={handleChange}
            multiple
            required
          />
          <button className="btn btn-primary" type="submit">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}
