import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ArtCards } from '../styles'
import './style.css'

function ArtCard({info}){
    let history = useHistory()
    return(
        <div class='ArtCards'>
       <img src={info.image_url}/>
       <p>{info.art_name}</p>
       <p>{info.artist_name}</p>
       <p>{info.description}</p>
       <p>{info.price}</p>
       <p>{info.location}</p>

        </div>
    )
}

export default ArtCard