import "./BlogCard.css";
import MediaCard from "../MediaCard/MediaCard";
import marked from "marked";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductCard({ article, user }) {
  const { title, blogContent, date } = article.fields;
  let [videoUrl, setVideoUrl] = useState("");
  let [img, setImg] = useState([]);
  // use navigate
  const navigate = useNavigate();

  useEffect(() => {
    const func = async () => {
      if (article.fields.img) {
        setImg(article.fields.img);
      }
      if (article.fields.video) {
        setVideoUrl(article.fields.video.fields.file.url);
      }
    };

    func();
  }, []);

  // console.log(article);
  ///////////////////////////////////////////

  return (
    <div className="eachProductContainer">
      <div className="eachProduct">
        <h3>{title}</h3>
        <h5>{date}</h5>
        {/* test */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-SQt2pF52k0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* from contentful */}
        {article.fields.video ? (
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : null}

        {img.length
          ? img.map((photo, index) => {
              return <MediaCard key={index} media={photo} />;
            })
          : null}
        <p>{blogContent}</p>
      </div>
    </div>
  );
}
