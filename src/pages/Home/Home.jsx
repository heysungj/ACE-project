import React from "react";
import schedule from "./photos/schedule.jpg";
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
          Enrichment (ACE). The Program follows the schedule of Needham Public
          Schools and provides a bilingual environment [Mandarin and English]
          with a variety of enrichment based on teaching staff availability,
          including Mandarin, Mathematics, Robotics &amp; Coding, Drawing,
          Crafting, Singing, Dancing and STEM Projects.
        </article>
        <img src={aceKids} alt="" className="malin" />
      </section>

      {/* curriculum */}
      <section className="content" id="curriculum">
        <h1 className="title">Curriculum</h1>
        <article>
          We work with our talented teaching staff and partner vendors to
          provide combinations of different enrichment for each weekday. For
          example, we offer Mathematics and Drawing on Tuesday and offer
          Mandarin and STEM project on Friday. In addition, we have many
          different toys, LEGO station, air hockey, and foosball table on site
          for creative fun time. When weather permitting, we also offer field
          trips to library, farms, and museums in the neighborhood. The
          curriculum every semester may be subject to change based on teaching
          staff availability.
        </article>
        <img src={schedule} alt="" className="schedule" />
        <img src={malin} alt="" className="malin" />
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
