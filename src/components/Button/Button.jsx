import { useNavigate } from "react-router-dom";
import { GoTag } from "react-icons/go";
import "./Button.css";

export default function Blogs({ tag, articles, tags, activeTag }) {
  // use navigate
  const navigate = useNavigate();
  //   get tag name
  const tagName = tag.sys.id;

  let filteredAriticles = [];
  async function handleClick() {
    // filter articles and set result into newArticles
    filteredAriticles = await articles.filter((article) => {
      if (article.metadata.tags.length) {
        return article.metadata.tags[0].sys.id === tagName;
      }
    });

    console.log("filteredAriticles", filteredAriticles);

    // navigate to filtered articles page
    navigate(`/blogs/${tagName}`, {
      state: {
        filteredAriticles,
        articles,
        tags,
        tagName,
      },
    });
  }
  return (
    <button
      onClick={handleClick}
      className={activeTag === tagName ? "tagBtnActive" : "tagBtn"}
    >
      <GoTag />
      {tagName}
    </button>
  );
}
