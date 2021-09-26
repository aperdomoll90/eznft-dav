import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtCard from "../Components/ArtCard";
import { ContentBox } from "../styles";

function Artwork() {
  const { id } = useParams();
  const [artWorkById, setArtWorkById] = useState();

  useEffect(() => {
    fetch(`https://eznft-api.web.app/artwork/${id}`)
      .then((res) => res.json())
      .then((data) => setArtWorkById(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(artWorkById);
  return (
    <ContentBox>
      <div>
        {artWorkById ? <ArtCard info={artWorkById} /> : <h2>Loading...</h2>}
      </div>
      <div>
        <p>Buy</p>
      </div>
    </ContentBox>
  );
}

export default Artwork;
