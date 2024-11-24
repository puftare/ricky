import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { fetchCharacterById } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const SingleCharacterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(fetchCharacterById, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { name, image, status, species, origin } = data;

  return (
    <div className="single-char-page">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Origin: {origin.name}</p>
    </div>
  );
};

export default SingleCharacterPage;