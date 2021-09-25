import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import { ContentBox } from '../styles'


function AddArtwork(){
    let history = useHistory()
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
<div class='streetField'></div>
<div class='cityField'></div>
<div class='zipField'></div>
<div class='zipField'></div>
</div>
<div class='fthRow'> 
<div class='descriptionField'></div>
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