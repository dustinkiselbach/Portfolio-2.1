import { _Projects } from './Projects.style'
import { Project } from './Project'

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <_Projects id='projects'>
      <Project />
    </_Projects>
  )
}
