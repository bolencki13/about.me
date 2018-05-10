import React, { Component } from 'react'
import './floatingActions.style.css'

export default class FloatingActions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fixedActions: false
    }

    this.floatingActions = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    if (!this.floatingActions.current) return

    this.setState({
      fixedActions: (this.floatingActions.current.parentElement.getBoundingClientRect().top <= 16)
    })
  }

  render () {
    console.log(this.state.fixedActions)
    return (
      <div className={`btn-group-vertical ${this.state.fixedActions ? 'floating-action-fixed' : ''}`} ref={this.floatingActions}>
        <a href="#projects" className="btn btn-green rounded mb-2">Top</a>
        <a href="#projects-bottom" className="btn btn-pink rounded mb-2">Bottom</a>
      </div>
    )
  }
}
