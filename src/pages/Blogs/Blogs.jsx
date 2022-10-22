import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import * as contentful from "contentful";
import "./Blogs.css";

export default function Blogs({ user }) {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  // contenful set up
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

      console.log(response);
      setArticles(response.items);

      // iterate through response and get all the tags
      for (let obj of response.items) {
        if (obj.metadata.tags.length !== 0) {
          const tempTag = [...tags, obj.metadata.tags[0].sys.id];
          setTags(tempTag);
          console.log(tags);
        }
      }
    };

    blogs();
  }, []);

  console.log("articles", articles);
  return (
    <main>
      <h1>Blogs page</h1>
      <div className="blogsContainer">
        {articles.length > 0 &&
          articles.map((article, index) => {
            return <BlogCard article={article} />;
          })}
      </div>
    </main>
  );
}
