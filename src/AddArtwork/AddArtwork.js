import { useState } from 'react'
import { uploadFile } from '../utils'
import './style.css'

function AddArtwork(){
    const [photoUrl, setPhotoUrl] = useState()
    const handleUpload = (file) => {
        uploadFile(file).then(publicUrl => {
            setPhotoUrl(publicUrl)
        })
    }
    return (
      <section className="container">
          <input
            type="file"
            accept="image/*"
            onChange={e => handleUpload(e.target.value)}
        />
      </section>
    )
}

export default AddArtwork