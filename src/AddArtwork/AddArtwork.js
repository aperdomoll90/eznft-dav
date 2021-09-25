import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import { ContentBox } from '../styles'


function AddArtwork(){
    let history = useHistory()
    const [newArt, setNewArt]=useState()
    return(
        <ContentBox >
            <div class='table'>
<div class='frstRow'></div>
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