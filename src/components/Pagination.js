import React from "react";

const Paginantion = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {" "}
            {page}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Paginantion;
