import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadFile } from '../utils'
import './style.css'

function AddArtwork(){
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        onDrop: files => {
            // console.log(files)
            files.forEach(file => uploadFile(file))
        }
    })
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
    )
}

export default AddArtwork