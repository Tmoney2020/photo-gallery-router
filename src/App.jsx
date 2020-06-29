import React, { Component } from 'react'
import data from './panda.json'
import Interests from './components/Interests'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
    )
  }
}
class App extends Component {
  render() {
    return (
      // <Router>
      <body>
        <header>
          <a
            href="https://photo-gallery-router-trentcosta.netlify.com"
            className="headerTitle"
          >
            My Interests
          </a>
          <h2>
            Photo's for those who seek to find, a place to leave their world
            behind
          </h2>
        </header>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
        {/* <div className="allInterests">
          <Interests />
          <Interests />
          <Interests />
          <Interests />
          <Interests />
        </div> */}

        {/* <Switch>
            <Route exact path="/" component={Interests} />
          </Switch> */}
      </body>
    )
  }
}

export default App
