import { useState } from "react";
import { post } from "axios";
import { getToken } from "../../utilities/users-service";
import "./AddBlog.css";

export default function AddBlog({ blogList, closeModal }) {
  const [newBlog, setNewBlog] = useState();

  const handleChange = (e) => {
    if (e.target.files) {
      const blog = {
        ...newBlog,
        [e.target.name]: e.target.files[0],
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
    // const addedBlog = await post(`/api/users/newBlog`, formData, config);
    // console.log("added Blog", addedBlog);

    // blogList.push(addedBlog.data);
    // closeModal();
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
