import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaGraduationCap, FaSuitcase } from 'react-icons/lib/fa'
import './timeLine.style.css'
import 'react-vertical-timeline-component/style.min.css'

export default class TimeLine extends Component {
  constructor (props) {
    super(props)

    this.cells = this.cells.bind(this)
  }

  cells () {
    return (
      <div>
        {
          this.cellWork()
        }
        {
          this.cellSchool()
        }
      </div>
    )
  }

  cellWork (info = {}) {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={info.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaSuitcase/>}>
        <h3 className="vertical-timeline-element-title">{info.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{info.location}</h4>
        <p>{info.details}</p>
      </VerticalTimelineElement>
    )
  }

  cellSchool (info = {}) {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={info.date}
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaGraduationCap/>}>
        <h3 className="vertical-timeline-element-title">{info.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{info.location}</h4>
        <p>{info.details}</p>
      </VerticalTimelineElement>
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
