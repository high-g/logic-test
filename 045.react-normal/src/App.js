import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './assets/css/App.css'
import About from './pages/About'
import Home from './pages/Home'
import Friends from './pages/Friends'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <ul className="App-link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>

)

export default App;
