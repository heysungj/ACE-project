import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import * as contentful from "contentful";

export default function Blogs({ user }) {
  const [articles, setArticles] = useState([]);

  // contenful set up
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API,
  });

  ///////////////////////////////////////////'

  useEffect(() => {
    const blogs = async () => {
      client
        .getEntries()
        .then((response) => {
          console.log(response);
          setArticles(response.items);
        })
        .catch(console.error);

      console.log("articles", articles);
    };

    blogs();
  }, []);
  return (
    <main>
      <h1>Blogs page</h1>

      {articles.map((article, index) => {
        return <BlogCard key={index} article={article} user={user} />;
      })}
    </main>
  );
}
