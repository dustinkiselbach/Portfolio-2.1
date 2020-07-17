import React from 'react'
import { _Projects } from './Projects.style'
import { Project } from './Project'
import { ContentfulProject } from '../../types/Project'

interface ProjectsProps {
  items: ContentfulProject[]
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <_Projects id='projects'>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Project item={item} />
        </React.Fragment>
      ))}
    </_Projects>
  )
}
