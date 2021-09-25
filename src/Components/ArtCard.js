import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ArtCards } from '../styles'
import './style.css'

function ArtCard({info}){
    let history = useHistory()
    return(
        <div class='ArtCards'>
       <p>{info.name}</p>
        </div>
    )
}

export default ArtCard