import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderProjects = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimelineCard key={each.id} CourseList={each} />
    }
    return <ProjectTimelineCard key={each.id} ProjectList={each} />
  }

  return (
    <div>
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>

      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{secondary: '#fff', primary: 'blue'}}
      >
        {timelineItemsList.map(each => renderProjects(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
