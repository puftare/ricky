import { Link } from "react-router-dom";
import { getStatusColor, makeTextShorter } from "../../utils/helpers";
import { MAX_TITLE_LIMIT } from "../../constants/constants";

const Card = ({ image, name, status, species, id }) => {
  const cardStyle = getStatusColor(status);
  const shortenedName = makeTextShorter(name, MAX_TITLE_LIMIT);

  return (
    <Link to={`/character/${id}`}>
      <div className={`card ${cardStyle}`}>
        <img src={image} alt={name} />
        <h3>{shortenedName}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </Link>
  );
};

export default Card;
