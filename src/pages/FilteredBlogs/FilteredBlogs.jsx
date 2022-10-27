import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../Blogs/Blogs.css";

export default function Blogs() {
  const { state } = useLocation();
  const { filteredAriticles, articles, tags, tagName } = state;
  console.log("new articles", filteredAriticles);

  return (
    <main>
      <h1>Blogs page </h1>
      <div className="btnContainer">
        <Link to="/blogs">
          <button className="tagBtn">show all</button>
        </Link>
        {tags.map((tag) => {
          return (
            <Button
              tag={tag}
              articles={articles}
              tags={tags}
              activeTag={tagName}
              filteredAriticles={filteredAriticles}
            />
          );
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
