import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { fetchCharacterById } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Button from "../../components/Button/Button";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

const SingleCharacterPage = () => {
  const { id } = useParams();

  const memoizedFetch = useCallback(() => fetchCharacterById(id), [id]);
  const memoizedId = useMemo(() => [id], [id]);

  const { data, loading, error } = useFetch(memoizedFetch, memoizedId);
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { name, image, status, species, origin } = data;

  return (
    <>
      <ToggleTheme />

      <div className="single-char-page">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin.name}</p>
        <Button onClick={() => navigate(-1)} className="btn">
          Go back
        </Button>
      </div>
    </>
  );
};

export default SingleCharacterPage;
