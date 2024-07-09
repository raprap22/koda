import React from 'react';
import './Pagination.css'; 

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pagination-text">Page {page}</span>
      <button className="pagination-button" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;