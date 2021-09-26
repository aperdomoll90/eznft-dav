import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { ContentBox } from '../styles'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import './style.css'

function Artwork() {
  const { id } = useParams()
  const [info, setInfo] = useState()
  let history = useHistory()

  useEffect(() => {
    fetch(`https://eznft-api.web.app/artwork/${id}`)
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <ContentBox>
      {info && (
        <div class='artField'>
          <div class='bottomLip'>
            <div class='labelArea'>
              <p class='label'>Name of the Piece</p>
              <p>{info.art_name}</p>
              <p class='label'>Description</p>
              <p>{info.description}</p>
              <p class='label'>Location </p>
              <p>{info.location}</p>
              <p class='label'>Price</p>
              <p>{info.price}</p>
              <p class='label'>Quantity</p>
              <p>{info.quantity}</p>
            </div>
            <div class='buttonArea'>
            <Fab color='default' aria-label='add' onClick={() => history.push('/addartwork')}>
              <AddIcon />
            </Fab>
          </div>
          </div>
          
        </div>
      )}
    </ContentBox>
  )
}

export default Artwork
