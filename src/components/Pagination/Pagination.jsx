import {
  getPages,
  getPageFromQueryParam,
  getSearchFromQueryParam,
} from "../../utils/helpers";
import Button from "../Button/Button";
import { NUMBER_OF_PAGINATION_BUTTONS } from "../../constants/constants";

const Pagination = ({ currentPage, totalPages, navigate }) => {
  const queryPage = getPageFromQueryParam();
  const searchQuery = getSearchFromQueryParam();
  const pages = getPages(totalPages, queryPage, NUMBER_OF_PAGINATION_BUTTONS);

  return (
    <div className="pagination">
      <Button
        disabled={currentPage === 1}
        onClick={() => {
          // onPageChange(1);
          navigate(`/?page=${1}&name=${searchQuery}`);
        }}
      >
        {"<<"}
      </Button>

      <Button
        disabled={currentPage === 1}
        onClick={() => {
          // onPageChange(currentPage - 1);
          navigate(`/?page=${currentPage - 1}&name=${searchQuery}`);
        }}
      >
        {"<"}
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => {
            // onPageChange(page);
            navigate(`/?page=${page}&name=${searchQuery}`);
          }}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </Button>
      ))}

      <Button
        disabled={currentPage === totalPages}
        onClick={() => {
          // onPageChange(currentPage + 1);
          navigate(`/?page=${currentPage + 1}&name=${searchQuery}`);
        }}
      >
        {">"}
      </Button>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => {
          // onPageChange(totalPages);
          navigate(`/?page=${totalPages}&name=${searchQuery}`);
        }}
      >
        {">>"}
      </Button>
    </div>
  );
};

export default Pagination;
