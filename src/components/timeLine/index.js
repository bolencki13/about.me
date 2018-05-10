import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { connect } from 'react-redux'
import { isoToDate } from '../../services/timeService'
import * as ProjectsActions from '../../redux/actions/projects/'
import cells from '../cells/'
import './timeLine.style.css'
import 'react-vertical-timeline-component/style.min.css'

class TimeLine extends Component {
  constructor (props) {
    super(props)

    this.cells = this.cells.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(ProjectsActions.github())
    this.props.dispatch(ProjectsActions.work())
  }

  cells () {
    let aryGithub = this.props.projects.github
      .map((item) => {
        return {
          id: item.id,
          title: item.name,
          details: item.description,
          location: 'GitHub',
          created_at: item.created_at,
          date: `${isoToDate(item.created_at)} - ${item.updated_at === 'present' ? 'Present' : isoToDate(item.updated_at)}`
        }
      })

    let aryWork = this.props.projects.work
      .map((item) => {
        return {
          id: item.id,
          title: item.name,
          details: item.description,
          location: 'Work',
          created_at: item.created_at,
          date: `${isoToDate(item.created_at)} - ${item.updated_at === 'present' ? 'Present' : isoToDate(item.updated_at)}`
        }
      })

    let aryItems = [...aryGithub, ...aryWork]
      .sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      .map((item) => {
        let Cell = cells[item.location]
        return (
          <Cell key={item.id} id={item.id} date={item.date} title={item.title} details={item.details}/>
        )
      })

    return (
      <div>
        {
          aryItems
        }
      </div>
    )
  }

  render () {
    return (
      <section id="projects" className="container">
        <div className="row">
          <div className="col-12 text-center mt-3">
            <h2>Projects & Work History</h2>
          </div>
        </div>
        <VerticalTimeline>
          {
            this.cells()
          }
        </VerticalTimeline>
      </section>
    )
  }
}

TimeLine.propTypes = {
  dispatch: PropTypes.func,
  projects: PropTypes.object
}

export default connect((store) => {
  return store
})(TimeLine)
