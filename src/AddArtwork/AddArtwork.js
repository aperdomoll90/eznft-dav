import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useHistory } from 'react-router-dom'
import { uploadFile } from '../utils'
import './style.css'
import { ContentBox } from '../styles'

function AddArtwork(){
    let history = useHistory()
    const [newArt, setNewArt]=useState()
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        onDrop: files => {
            // console.log(files)
            files.forEach(file => uploadFile(file))
        }
    })
    return(
        <ContentBox >
            <div class='table'>
<div class='frstRow'>
<section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </section>
</div>
<div class='scndRow'>
<div class='artNameField'></div>
<div class='artPriceField'></div>
<div class='artQntyField'></div>
</div>
<div class='thrdRow'>
<div class='streetField'><label >Street</label><input class='input' onChange={e => setNewArt({ ...newArt, street: e.target.value })} /></div>
<div class='cityField'><label >city</label> <input class='input' onChange={e => setNewArt({ ...newArt, city: e.target.value })} /></div>
<div class='zipField'><label >state</label><input class='input' onChange={e => setNewArt({ ...newArt, state: e.target.value })} /></div>
<div class='zipField'><label >zip</label><input class='input' onChange={e => setNewArt({ ...newArt, zip: e.target.value })} /></div>
</div>
<div class='fthRow'> 
<div class='descriptionField'>
<label >Comment here</label>
<textarea onChange={e => setNewArt({ ...newArt, description: e.target.value })} class='descriptionTextarea' rows='9' cols='30'/>
</div>
<div class='signatureField'></div>
</div>
<div class='FftRow'>
    <div class='button'></div>
    <div class='button'></div>
</div>


            </div>

        </ContentBox>
    ) 
}

export default AddArtwork