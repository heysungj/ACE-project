import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Blogs({ tag, articles }) {
  // use navigate
  const navigate = useNavigate();
  //   get tag name
  const tagName = tag.sys.id;
  const [newArticles, setNewArticles] = useState([]);

  async function handleClick() {
    // filter articles and set result into newArticles
    const filteredAriticles = await articles.filter((article) => {
      return article.metadata.tags[0].sys.id === tagName;
    });
    setNewArticles(filteredAriticles);
    // console.log("filteredAriticles", filteredAriticles);

    // navigate to filtered articles page
    navigate(`/blogs/${tagName}`, {
      state: {
        newArticles,
      },
    });
  }
  return (
    <div>
      <button onClick={handleClick}>{tagName}</button>
    </div>
  );
}
