import { Link, useLocation } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import './style.css'

function ArtCard({ info }) {
     const location = useLocation()
     const path =
          location.pathname === '/landing' ? `/artwork/${info.id}` : '/landing'
     const image = info.image_url
     return (
          <Link to={path} style={{ textDecoration: 'none' }}>
               <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                         title={info.art_name}
                         subheader={info.artist_name}
                    />
                    <CardActionArea>
                         <CardMedia
                              component="img"
                              height="194"
                              alt={info.description}
                              image={image}
                         />
                         <CardContent>
                              <Typography
                                   variant="body2"
                                   color="text.secondary"
                              >
                                   {info.description}
                              </Typography>
                         </CardContent>
                    </CardActionArea>
               </Card>
          </Link>
     )
}

export default ArtCard
