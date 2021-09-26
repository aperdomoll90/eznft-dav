import './style.css'

function ArtCard({ info }) {
     return (
          <div class="ArtCards">
               <img alt="" src={info.image_url} />
               <p>{info.art_name}</p>
               <p>{info.artist_name}</p>
               <p>{info.description}</p>
               <p>{info.price}</p>
               <p>{info.location}</p>
          </div>
     )
}

export default ArtCard
