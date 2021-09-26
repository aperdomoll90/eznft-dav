import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import { uploadFile } from '../utils'
import { ContentBox } from '../styles'
import './style.css'

function AddArtwork() {
  let history = useHistory()
  const [newArt, setNewArt] = useState()
  const handleUpload = (files) => {
    console.log(files)
    uploadFile(files[0]).then(photoUrl => {
      setNewArt({ ...newArt, image_url: photoUrl })
    })
  }

  const handleSubmit = () => {
    fetch(`https://eznft-api.web.app/artwork`, {
    // fetch(`http://localhost:5000/artwork`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'no-cors',
      body: JSON.stringify(newArt),
    })
      .then(() => history.push('/'))
      .catch(err => console.log(err))
  }

  return (
    <ContentBox>
      <div class='table'>
        <section class='column'>
          <div className='pictureRow'>
            <input type='file' accept='image/*' onChange={e => handleUpload(e.target.files)} />
          </div>
          
        </section>
        <section class='column'>
          <div class='infoField'>
            <div class='tripleRow'>
              <input class='mediumInput' placeholder='  Name of the Piece' onChange={e => setNewArt({ ...newArt, art_name: e.target.value })} />
              <input class='smallInput' placeholder='  Price' onChange={e => setNewArt({ ...newArt, price: e.target.value })} />
              <input class='smallInput' placeholder='  Quantity' onChange={e => setNewArt({ ...newArt, quantity: e.target.value })} />
            </div>
            <div class='singleRow'>
              <input class='largeInput' placeholder='  Street Address' onChange={e => setNewArt({ ...newArt, location: e.target.value })} />
            </div>
          </div>
          <div class='infoField'>
            <label>Provide a description of the piece here: </label>
            <textarea rows='30' cols='80' onChange={e => setNewArt({ ...newArt, description: e.target.value })} class='descriptionTextarea' />
          </div>

          <div class='buttonField'>
          <Button variant="contained"
            size="large"
            color="warning"
           onClick={handleSubmit}>
            Create NFT</Button>
          </div>
        </section>
      </div>
    </ContentBox>
  )
}

export default AddArtwork
