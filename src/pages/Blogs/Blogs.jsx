import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import Button from "../../components/Button/Button";
// import TagButtons from '../../components/TagButtons/TagButtons';
import { useEffect, useState } from "react";
import * as contentful from "contentful";
import "./Blogs.css";

export default function Blogs({ user }) {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  // contenful set up
  const options = {
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API,
    resolveLinks: true,
  };
  const client = contentful.createClient(options);

  ///////////////////////////////////////////'

  useEffect(() => {
    const blogs = async () => {
      // get all blogs from contentful space
      const response = await client.getEntries().catch(console.error);
      const tags = await client.getTags();
      // console.log("tags", tags);

      // console.log(response);
      setArticles(response.items);
      setTags(tags.items);
    };

    blogs();
  }, []);

  console.log("articles", articles);
  return (
    <main>
      <h1>Blogs page</h1>
      <div className="btnContainer">
        <Link to="/blogs">
          <button className="tagBtn">show all</button>
        </Link>
        {tags.map((tag) => {
          return <Button tag={tag} articles={articles} tags={tags} />;
        })}
      </div>
      <div className="blogsContainer">
        {articles.length > 0 &&
          articles.map((article, index) => {
            return <BlogCard article={article} />;
          })}
      </div>
    </main>
  );
}
