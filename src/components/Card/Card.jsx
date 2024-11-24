import { Link } from "react-router-dom";
import { getStatusColor } from "../../utils/helpers";

const Card = ({ image, name, status, species, id }) => {
  const cardStyle = getStatusColor(status);

  return (
    <Link to={`/character/${id}`}>
      <div className={`card ${cardStyle}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </Link>
  );
};

export default Card;
