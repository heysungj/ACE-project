import React from "react";
import schedule from "./photos/schedule.jpg";
import * as blogAPI from "../../utilities/users-api";
import "./Home.css";
import malin from "./photos/malinlin_jpg.jpeg";
import ace1 from "./photos/ace_1.jpg";
import ace2 from "./photos/ace_2.jpg";
import ace3 from "./photos/ace_3.jpg";
import ace4 from "./photos/ace_4.jpg";
import ace6 from "./photos/ace_6.jpg";
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
      <section className="content" id="about">
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={ace1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ace3} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ace2} alt="Third slide" />
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src={ace6} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ace4} alt="First slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <h1 className="title">About us</h1>
        <article>
          Needham ACE Program stands for Needham After-school with Comprehensive
          Enrichment. The Program provides transportation from Needham Public
          Schools to the after-school location. The Program Curriculum include
          enrichment of Mandarin, Math, Wordly Wise 3000/Reading Club, STEM,
          Dancing (Hip Hop), LEGO, and Drawing.
        </article>
      </section>
      <section className="content" id="curriculum">
        <h1 className="title">Curriculum</h1>
        <img src={schedule} alt="" className="schedule" />
        <img src={malin} alt="" className="malin" />
        <h4>Fall 2022 After School Operation Schedule: </h4>

        <ol class="list-group list-group-numbered">
          <li class="list-group-item">
            Needham ACE follows NPS school calendars and health protocols
          </li>
          <li class="list-group-item">Monday - Friday: 3pm-6pm</li>
          <li class="list-group-item">Early Release Schedule: 12:30pm-6pm</li>
          <li class="list-group-item">
            For pick-up procedures, please refer to the Parent Handbook which
            will be shared via email after registration.
          </li>
        </ol>
      </section>
      <section className="content" id="blog">
        <h1 className="title">Blogs</h1>
        <div className="blogsContainer">
          {newList.length > 0 &&
            newList.map((article, index) => {
              return <BlogCard article={article} />;
            })}
        </div>
        <Link to="/blogs">
          <button className="btn btn-outline-info">More Blogs</button>
        </Link>
      </section>
    </main>
  );
}
