import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Blogs/Blogs.css";

export default function Blogs() {
  // use navigate
  const navigate = useNavigate();
  const { state } = useLocation();
  const { filteredAriticles, articles, tags } = state;
  console.log("new articles", filteredAriticles);

  return (
    <main>
      <h1>Blogs page</h1>
      <div>
        {tags.map((tag) => {
          return <Button tag={tag} articles={articles} tags={tags} />;
        })}
      </div>
      <div className="blogsContainer">
        {filteredAriticles.length > 0 &&
          filteredAriticles.map((article, index) => {
            return <BlogCard article={article} />;
          })}
      </div>
    </main>
  );
}
