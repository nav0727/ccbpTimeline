import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {ProjectList} = props
  // const data = timelineItemsList.filter(each => each.categoryId === 'PROJECT')

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectList

  return (
    <div className="card">
      <img src={imageUrl} alt="project" className="image" />

      <div className="row">
        <h1>{projectTitle}</h1>
        <div className="row1">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} style={{textDecoration: 'none'}} className="btn">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
