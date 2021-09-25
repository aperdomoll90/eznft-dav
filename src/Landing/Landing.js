import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'


function Landing(){
    let history = useHistory()
    return(
        <>
        <p onClick={() => history.push('/addartwork')}>Add Work</p>
        <p onClick={() => history.push('/artwork')}>Artwork</p>
        <p onClick={() => history.push('/test')}>Damian Test</p>
        </>
    )
}

export default Landing