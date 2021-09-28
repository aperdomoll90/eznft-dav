import { createContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing/Landing'
import Artwork from './Artwork/Artwork'
import AddArtwork from './AddArtwork/AddArtwork'
import NavBar from './NavBar'
import {Body} from './styles'
import './App.css';

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser}}>
    <Body >
      <Router>
      <NavBar/>
      <Switch>
        <Route path='/addartwork' component={AddArtwork} />
        <Route path='/artwork/:id' component={Artwork} />
        <Route path='/' component={Landing} />
      </Switch>
      </Router>
    </Body>
    </UserContext.Provider>
  );
}

export default App;