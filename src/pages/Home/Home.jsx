import React from "react";
import projects from "./photos/projects.jpg";
// import * as blogAPI from "../../utilities/users-api";
import "./Home.css";
import malin from "./photos/malinlin.png";
import aceKids from "./photos/ace_kids.png";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

export default function NewOrderPage() {
  const [blogList, setBlogList] = useState([]);

  // contenful set up
  const options = {
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API,
    resolveLinks: true,
  };
  const client = contentful.createClient(options);

  ///////////////////////////////////////////'
  // get first 2  blogs
  useEffect(() => {
    const blogs = async () => {
      // get all blogs from contentful space
      const response = await client.getEntries().catch(console.error);

      console.log(response);
      setBlogList(response.items);
    };

    blogs();
  }, []);

  //   get first 2 blogs
  let newList = blogList.slice(0, 2);

  return (
    <main>
      {/* about us */}
      <section className="content" id="about">
        <h1 className="title">About us</h1>
        <article>
          Needham ACE Program stands for Needham Afterschool with Comprehensive
          Enrichment (ACE). The Program aims to provide high quality enrichment
          classes to students from kindergarten to 5th grade. The program is
          designed with a focus on students’ involvement and interaction, in
          order to improve both academic and social skills.
        </article>
        <img src={aceKids} alt="" className="malin" />
      </section>

      {/* curriculum */}
      <section className="content" id="curriculum">
        <h1 className="title">Curriculum</h1>
        <article>
          We work with our talented teaching staff and partner vendors to
          provide combinations of different enrichment for each weekday. Our
          enrichment classes include Mandarin, Mathematics, Robotics &amp;
          Coding, Drawing, Crafting, Singing, Dancing and STEM Projects. In
          addition, we encourage a bilingual environment for students to immerse
          in language and culture learning. Here is the
          <a href="https://docs.google.com/spreadsheets/d/1xgMySG3gXg6yaExEezzD7lfduArlM7oyvM8ycR3i1B0/edit#gid=0">
            {" "}
            Current Curriculum
          </a>
          .
        </article>
        <img src={malin} alt="" className="malin" />
        <img src={projects} alt="" className="malin" />
      </section>

      {/* blog part */}
      <section className="content" id="blog">
        <h1 className="title">Blogs</h1>
        <div className="blogsContainer">
          {newList.length > 0 &&
            newList.map((article, index) => {
              return <BlogCard article={article} />;
            })}
        </div>
        <Link to="/blogs">
          <button className="btn btn-primary">More Blogs</button>
        </Link>
      </section>
    </main>
  );
}
