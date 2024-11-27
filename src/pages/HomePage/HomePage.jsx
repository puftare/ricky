import { useState, useCallback, useMemo } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchCharacters } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import {
  getPageFromQueryParam,
  getSearchFromQueryParam,
} from "../../utils/helpers";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const queryPage = getPageFromQueryParam();

  const memoizedParams = useMemo(
    () => [searchQuery, queryPage],
    [searchQuery, queryPage]
  );
  const memoizedFetch = useCallback(() => fetchCharacters(), []);

  const { data, loading, error } = useFetch(memoizedFetch, memoizedParams);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    navigate(`?page=1&name=${e.target.value}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <ToggleTheme />
      <div className="home-page">
        <h1>Rick and Morty Characters</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search characters..."
            value={getSearchFromQueryParam()}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid">
          {data?.results?.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>

        <Pagination
          currentPage={queryPage}
          totalPages={data?.info?.pages}
          navigate={navigate}
        />
      </div>
    </>
  );
};

export default HomePage;
