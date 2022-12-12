import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {CourseList} = props
  // const data = timelineItemsList.filter(each => each.categoryId === 'PROJECT')

  const {
    courseTitle,
    description,

    duration,
    // tagsList,
  } = CourseList

  return (
    <div className="card">
      <div className="row">
        <h1>{courseTitle}</h1>
        <div className="row1">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>

      <ul className="ul-con">
        {CourseList.tagsList.map(each => (
          <li className="li">{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
