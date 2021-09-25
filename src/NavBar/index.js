import { NavLink } from 'react-router-dom'
import {Header} from '../styles'

function NavBar(){

    return(
        <Header>
        <NavLink to='/landing'>Home</NavLink>
        <NavLink to='/addartwork'>Add Work</NavLink>
        <NavLink to='/artwork'>Artwork</NavLink>
        <NavLink to='/test'>Damian Test</NavLink>
        </Header>
    )
}

export default NavBar