import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Blogs/Blogs.css";

export default function Blogs({ user }) {
  // use navigate
  const navigate = useNavigate();
  const { state } = useLocation();
  const { newArticles, articles, tags } = state;

  return (
    <main>
      <h1>Blogs page</h1>
      <div>
        {tags.map((tag) => {
          return <Button tag={tag} articles={articles} tags={tags} />;
        })}
      </div>
      <div className="blogsContainer">
        {newArticles.length > 0 &&
          newArticles.map((article, index) => {
            return <BlogCard article={article} />;
          })}
      </div>
    </main>
  );
}
