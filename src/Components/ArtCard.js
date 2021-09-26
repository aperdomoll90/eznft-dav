import { Link, useLocation } from "react-router-dom";
import "./style.css";

function ArtCard({ info }) {
  const location = useLocation();
  const path =
    location.pathname === "/landing" ? `/artwork/${info.id}` : "/landing";
  return (
    <Link to={path}>
      <div class="ArtCards">
        <img alt={info.description} src={info.image_url} />
        <p>{info.art_name}</p>
        <p>{info.artist_name}</p>
        <p>{info.description}</p>
        <p>{info.price}</p>
        <p>{info.location}</p>
      </div>
    </Link>
  );
}

export default ArtCard;
