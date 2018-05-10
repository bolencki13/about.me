import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaSuitcase } from 'react-icons/lib/fa'
import 'react-vertical-timeline-component/style.min.css'

class WorkCell extends Component {
  render () {
    let info = this.props
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={(<p className="pl-0 pr-0 pl-xl-5 pr-xl-5">{info.date}</p>)}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaSuitcase/>}>
        <h3 className="vertical-timeline-element-title">{info.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{info.location}</h4>
        <p>{info.details}</p>
      </VerticalTimelineElement>
    )
  }
}

WorkCell.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string
}

export default WorkCell
