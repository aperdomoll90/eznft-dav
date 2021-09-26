import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ContentBox } from '../styles'
import ArtCard from '../Components/ArtCard'
import './style.css'
import HomeImage from '../elements/HomeImage.png'

function Landing() {
  let history = useHistory()
  const [artWorkList, setArtWorkList] = useState()

  useEffect(() => {
    fetch(`https://eznft-api.web.app/artwork`)
      .then(res => res.json())
      .then(data => setArtWorkList(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <ContentBox>
      <div class='columnsLeft'>
        <img class='homeImage' alt='' src={HomeImage}/>
      </div>
      <div class='columns'> {artWorkList && artWorkList.map(art => <ArtCard key={art.id} info={art} />)}</div>

      <Fab color="default" aria-label="add" onClick={() => history.push('/addartwork')}>
        <AddIcon />
      </Fab>

    </ContentBox>
  )
}

export default Landing
