import React, { Component } from 'react'
import {Router, Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'

// Pages
import HomePage from './pages/home/'

class App extends Component {
  render () {
    return (
      <Router history={createHistory()}>
        <Route exact path="/" component={HomePage}/>
      </Router>
    )
  }
}

export default App
