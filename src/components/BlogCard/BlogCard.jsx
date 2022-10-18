import "./BlogCard.css";
import MediaCard from "../MediaCard/MediaCard";
import marked from "marked";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ article, user }) {
  const { title, blogContent, date, feature } = article.fields;
  // use navigate
  const navigate = useNavigate();
  console.log(article);
  ///////////////////////////////////////////

  return (
    <div className="eachProductContainer">
      <div className="eachProduct">
        <h3>{title}</h3>
        <h5>{date}</h5>
        {feature.map((media, index) => {
          return <MediaCard ley={index} media={media} />;
        })}
        <p>{blogContent}</p>
      </div>
    </div>
  );
}
