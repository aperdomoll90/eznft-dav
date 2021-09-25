import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing/Landing.js'
import Artwork from './Artwork/Artwork.js'
import AddArtwork from './AddArtwork/AddArtwork.js'
import DamianTest from './DamianTest'


import {Header, Body} from './styles'
import './App.css';

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser}}>
    <Body className="App">
      <Header/>
      <Router>
      <Switch>
            <Route path='/test' component={DamianTest} />
            <Route path='/addartwork' component={AddArtwork} />
            <Route path='/artwork' component={Artwork} />
            <Route path='/' component={Landing} />
          </Switch>
      </Router>
    </Body>
    </UserContext.Provider>
  );
}

export default App;