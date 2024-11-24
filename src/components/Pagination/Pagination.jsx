import { getPages } from "../../utils/helpers";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getPages(totalPages, currentPage, 3);

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        First
      </button>

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
