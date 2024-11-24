import { getPages } from "../../utils/helpers";
import Button from "../Button/Button";
import { NUMBER_OF_PAGINATION_BUTTONS } from "../../constants/constants";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = getPages(totalPages, currentPage, NUMBER_OF_PAGINATION_BUTTONS);

  return (
    <div className="pagination">
      <Button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        First
      </Button>

      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </Button>
      ))}

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </Button>
    </div>
  );
};

export default Pagination;
