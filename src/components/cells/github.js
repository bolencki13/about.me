import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaGithubAlt } from 'react-icons/lib/fa'
import 'react-vertical-timeline-component/style.min.css'

class GitHubCell extends Component {
  render () {
    let info = this.props
    return (
      <VerticalTimelineElement
        key={info.id}
        className="vertical-timeline-element--github"
        date={(<p className="pl-0 pr-0 pl-xl-5 pr-xl-5">{info.date}</p>)}
        iconStyle={{ background: 'rgb(66, 70, 73)', color: '#fff' }}
        icon={<FaGithubAlt/>}>
        <h3 className="vertical-timeline-element-title">{info.title}</h3>
        <p>{info.details}</p>
      </VerticalTimelineElement>
    )
  }
}

GitHubCell.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string
}

export default GitHubCell
