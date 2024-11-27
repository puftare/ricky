import { useCallback, useMemo } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchCharacters } from "../../services/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page"));
  const name = searchParams.get("name");

  const memoizedParams = useMemo(() => [page, name], [page, name]);
  const memoizedFetch = useCallback(
    () => fetchCharacters(...memoizedParams),
    [memoizedParams]
  );

  const { data, loading, error } = useFetch(memoizedFetch, memoizedParams);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    navigate(`?page=1&name=${e.target.value}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error?.message} />;

  return (
    <>
      <ToggleTheme />
      <div className="home-page">
        <h1>Rick and Morty Characters</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search characters..."
            value={name}
            onChange={handleSearchChange}
          />
        </div>

        {!error && (
          <>
            <div className="grid">
              {data?.results?.map((character) => (
                <Card key={character.id} {...character} />
              ))}
            </div>
            <Pagination currentPage={page} totalPages={data?.info?.pages} />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
