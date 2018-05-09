import React, { Component } from 'react'
import './aboutMe.style.css'

export default class AboutMe extends Component {
  render () {
    return (
      <section id="bto-about-me" className="container">
        <div className="row h-100">
          <div className="col-12 text-center align-self-center">
            <img className="rounded" src="https://media.licdn.com/dms/image/C4E03AQFG0iHhtDVSvg/profile-displayphoto-shrink_200_200/0?e=1531353600&v=beta&t=6PWD8arccHJ1qvMoEWNHe1u6_RH21kN2wRTvd-D1Jmo" alt="of me"/>
            <h1>Hi, I&#39;m Brian. I do a number of things.</h1>
            <ul className="list-inline">
              <li className="list-inline-item">Eagle Scout &#45;</li>
              <li className="list-inline-item">Developer &#45;</li>
              <li className="list-inline-item">Entrepreneur</li>
            </ul>
            <a className="btn btn-dark" href="#projects">My Projects</a>
          </div>
        </div>
      </section>
    )
  }
}
