import React, { Component } from 'react'
import './menu.style.css'

export default class Menu extends Component {
  render () {
    return (
      <nav id="bto-menu" className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">About Me</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://repo.bolencki13.com/">Cydia Repo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
