import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { uploadFile } from '../utils'
import { ContentBox } from '../styles'
import './style.css'

function AddArtwork() {
  let history = useHistory()
  const [newArt, setNewArt] = useState()
  const handleUpload = file => {
    uploadFile(file).then(photoUrl => {
      setNewArt({ ...newArt, photoUrl })
    })
  }
  return (
    <ContentBox>
      <div class='table'>
        <section class='column'>
          <div className='pictureRow'>
            <input type='file' accept='image/*' onChange={e => handleUpload(e.target.value)} />
          </div>
          <div class='infoField'>
            <label>Provide a description of the piece here: </label>
            <textarea rows='30' cols='80' onChange={e => setNewArt({ ...newArt, description: e.target.value })} class='descriptionTextarea' />
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
              <input class='largeInput' placeholder='  Street Address' onChange={e => setNewArt({ ...newArt, street: e.target.value })} />
            </div>
            <div class='tripleRow'>
              <input class='input' placeholder='  City' onChange={e => setNewArt({ ...newArt, city: e.target.value })} />
              <input class='input' placeholder='  State' onChange={e => setNewArt({ ...newArt, state: e.target.value })} />
              <input class='input' placeholder='  Zip' onChange={e => setNewArt({ ...newArt, zip: e.target.value })} />
            </div>
          </div>

          <div class='buttonField'>
            <div class='button'>
              <p>+</p>
            </div>
            <div class='button'>
              <p>Sell</p>
            </div>
          </div>
        </section>
      </div>
    </ContentBox>
  )
}

export default AddArtwork
