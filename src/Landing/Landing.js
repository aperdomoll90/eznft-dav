import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ContentBox, AddButton } from '../styles'
import ArtCard from '../Components/ArtCard'
import './style.css'

function Landing() {
  let history = useHistory()
  const [artWorkList, setArtWorkList] = useState()

  useEffect(() => {
    fetch(`https://eznft-api.web.app`)
      .then(res => res.json())
      .then(data => setArtWorkList(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <ContentBox>
        {console.log(artWorkList)}
      {/* {artWorkList.map(art => (
        <ArtCard info={art} />
      ))} */}
      <div class='AddButton' onClick={() => history.push('/addartwork')} />
    </ContentBox>
  )
}

export default Landing
