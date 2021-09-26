import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
        <img class='homeImage' src={HomeImage}/>
      </div>
      <div class='columns'> {artWorkList && artWorkList.map(art => <ArtCard key={art.id} info={art} />)}</div>

      <div class='AddButton' onClick={() => history.push('/addartwork')}>
        <p>+</p>
      </div>
    </ContentBox>
  )
}

export default Landing
