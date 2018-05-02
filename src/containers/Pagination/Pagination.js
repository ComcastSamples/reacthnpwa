import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = (props) => {
  const { story, page, pages } = props;

  let currentPage = parseInt(page, 10);
  let nextPage = currentPage !== 1 ? currentPage - 1 : currentPage;
  let prevPage = currentPage !== pages ? currentPage + 1 : currentPage;

  return (
    <div className="Pagination">
      {currentPage !== 1 && <Link to={`/${story}/${nextPage}`}>&lt; prev</Link>}

      <span>{`${currentPage}/${pages}`}</span>

      {currentPage !== pages && (
        <Link to={`/${story}/${prevPage}`}>next &gt;</Link>
      )}
    </div>
  );
};

export default Pagination;
