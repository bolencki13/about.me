import React, { Component } from 'react'
import Menu from '../../components/menu/'
import AboutMe from '../../components/aboutMe/'

export default class HomePage extends Component {
  render () {
    return (
      <div id="bto-page-home">
        <Menu/>
        <AboutMe/>
      </div>
    )
  }
}
