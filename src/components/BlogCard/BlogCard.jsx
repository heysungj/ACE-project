import "./BlogCard.css";
import marked from "marked";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function ProductCard({ article, user }) {
  const { title, content, date, photo } = article.fields;
  // use navigate
  const navigate = useNavigate();

  ///////////////////////////////////////////

  return (
    <div className="eachProductContainer">
      <div className="eachProduct">
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
}
