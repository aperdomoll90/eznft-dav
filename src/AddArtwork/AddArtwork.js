import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useHistory } from 'react-router-dom'
import { uploadFile } from '../utils'
import './style.css'
import { ContentBox } from '../styles'

function AddArtwork() {
  let history = useHistory()
  const [newArt, setNewArt] = useState()
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: files => {
      // console.log(files)
      files.forEach(file => uploadFile(file))
    },
  })
  return (
    <ContentBox>
      <div class='table'>
        <section class='column'>
          <div className='pictureRow'>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
          <div class='infoField'>
          <label>Provide a description of the piece here: </label>
              <textarea rows='30' cols='80' onChange={e => setNewArt({ ...newArt, description: e.target.value })} class='descriptionTextarea'  />
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
              <div class='button'><p>+</p></div>
              <div class='button'><p>Sell</p></div>

          </div>
        </section>
      </div>
    </ContentBox>
  )
}

export default AddArtwork
