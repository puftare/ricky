import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchCharacters } from "../../services/api";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const params = useMemo(
    () => [currentPage, searchQuery],
    [currentPage, searchQuery]
  );
  const { data, loading, error } = useFetch(fetchCharacters, params);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div className="home-page">
      <h1>Rick and Morty Characters</h1>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

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
