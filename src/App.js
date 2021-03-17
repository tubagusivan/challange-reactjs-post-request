import React, { Component } from 'react'
import './App.css'
import PostForm from './components/PostForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <nav>
            <ul>
              <li><a href="/components/PostForm">Post Login</a></li>
              <li><a href="/components/RegisterForm">Register Login</a></li>
            </ul>
          </nav>
        </main>
        <div className="App">
          <Route path="/components/PostForm" exact component={PostForm} />
          <Route path="/components/RegisterForm" exact component={RegisterForm} />
        </div>
      </Router>
    )
  }
}

export default App;
