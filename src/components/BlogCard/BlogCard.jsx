import "./BlogCard.css";
import richtextRenderOptions from "./richtextRenderOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import marked from "marked";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductCard({ article, user }) {
  const { title, blogContent, date } = article.fields;
  let [newDate, setNewDate] = useState(date);
  // use navigate
  // const navigate = useNavigate();

  useEffect(() => {
    const func = async () => {
      // if (article.fields.img) {
      //   setImg(article.fields.img);
      // }
      // if (article.fields.video) {
      //   setVideoUrl(article.fields.video.fields.file.url);
      // }

      // format date
      const timestamp = Date.parse(date);
      const formattedDate = new Date(timestamp);
      function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString("en-US", { month: "long" });
      }

      const dateResult = `${formattedDate.getDate()} ${getMonthName(
        formattedDate.getMonth()
      )} ${formattedDate.getFullYear()}`;

      console.log("formatted date", dateResult);

      setNewDate(dateResult);
    };

    func();
  }, []);

  // console.log(article);
  ///////////////////////////////////////////

  return (
    <div className="">
      <h4>{title}</h4>
      <h5>{newDate}</h5>
      {documentToReactComponents(
        article.fields.blogContent,
        richtextRenderOptions
      )}
    </div>
  );
}
