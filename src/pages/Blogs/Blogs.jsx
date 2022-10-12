import React from "react";
import Modal from "react-modal";
import AddBlog from "../../components/AddBlog/AddBlog";
import BlogCard from "../../components/BlogCard/BlogCard";
import * as blogAPI from "../../utilities/users-api";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogList, setBlogList] = useState([]);
  // set up react-modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#003580";
  }

  function closeModal() {
    setIsOpen(false);
  }

  ///////////////////////////////////////////'

  useEffect(() => {
    const blogs = async () => {
      const allBlogs = await blogAPI.getBlog();
      setBlogList(allBlogs);
      console.log("allBlogs", allBlogs);
    };

    blogs();
  }, []);
  return (
    <main>
      <h1>Blogs page</h1>
      <button onClick={openModal}>Add Blog</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Blog</h2>
        <AddBlog closeModal={closeModal} blogList={blogList} />
      </Modal>
    </main>
  );
}
