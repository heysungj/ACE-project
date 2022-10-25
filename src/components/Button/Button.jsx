import { useNavigate } from "react-router-dom";

export default function Blogs({ tag, articles, tags }) {
  // use navigate
  const navigate = useNavigate();
  //   get tag name
  const tagName = tag.sys.id;

  async function handleClick() {
    // filter articles and set result into newArticles
    const filteredAriticles = await articles.filter((article) => {
      return article.metadata.tags[0].sys.id === tagName;
    });

    console.log("filteredAriticles", filteredAriticles);

    // navigate to filtered articles page
    navigate(`/blogs/${tagName}`, {
      state: {
        filteredAriticles,
        articles,
        tags,
      },
    });
  }
  return (
    <button onClick={handleClick} className="tagBtn">
      {tagName}
    </button>
  );
}
