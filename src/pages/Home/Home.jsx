import React from "react";
import schedule from "./schedule.jpg";
import "./Home.css";
import malin from "./malinlin_jpg.jpeg";
import { Link } from "react-router-dom";

export default function NewOrderPage() {
  return (
    <main>
      <section className="content">
        <h1 className="title">About us</h1>
        <article>
          Needham ACE Program stands for Needham After-school with Comprehensive
          Enrichment. The Program provides transportation from Needham Public
          Schools to the after-school location. The Program Curriculum include
          enrichment of Mandarin, Math, Wordly Wise 3000/Reading Club, STEM,
          Dancing (Hip Hop), LEGO, and Drawing.
        </article>
      </section>
      <section className="content">
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
      <section className="content">
        <h1 className="title">Blogs</h1>

        <Link to="/blogs">
          <button>More Blogs</button>
        </Link>
      </section>
    </main>
  );
}
