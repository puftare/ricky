import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchCharacters } from "../../services/api";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useMemo(() => [currentPage], [currentPage]);
  const { data, loading, error } = useFetch(fetchCharacters, params);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div className="home-page">
      <h1>Rick and Morty Characters</h1>
      <div className="grid">
        {data.results.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data.info.pages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
