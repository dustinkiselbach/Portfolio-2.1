import {
  _Project,
  ProjectTitle,
  ProjectImage,
  ProjectInfo,
  ProjectTech,
  ProjectLinks,
  ProjectLink
} from './Projects.style'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { variants } from '../../utils/variants'
import { Lead } from '../../styles/utils'
interface ProjectProps {}

export const Project: React.FC<ProjectProps> = ({}) => {
  const [projectRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <_Project ref={projectRef}>
      <ProjectTitle animate={animation} initial='hidden' variants={variants}>
        Musician's Home
        <span>- housing website</span>
      </ProjectTitle>
      <ProjectImage backgroundImage='https://dustinkiselbach.dev/img/musicians-home.png' />
      <ProjectInfo>
        <ProjectTech>
          ReactJS &bull; SCSS &bull; AmazonS3 &bull; NodeJS &bull; ExpressJs
        </ProjectTech>
        <Lead>
          A fullstack website made for finding housing with other musicians.
          Renters can filter listings by location and find a place in the
          neighborhood of their choice. You can create your own listings and
          upload images, which are handled by Amazon S3. The backend is built
          with NodeJS, Express JS, and mongoDb, and the frontend is built with
          ReactJS, and SCSS. This website was built and designed entirely by
          Dustin.
        </Lead>
        <ProjectLinks>
          <ProjectLink>
            <i className='fab fa-github' />
            <label>code</label>
          </ProjectLink>
          <ProjectLink>
            <i className='far fa-play-circle' />
            <label>preview</label>
          </ProjectLink>
          <ProjectLink>
            <i className='fas fa-laptop' />
            <label>demo</label>
          </ProjectLink>
        </ProjectLinks>
      </ProjectInfo>
    </_Project>
  )
}
