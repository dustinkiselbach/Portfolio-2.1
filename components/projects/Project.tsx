import {
  _Project,
  ProjectTitle,
  ProjectImage,
  ProjectInfo,
  ProjectTech,
  ProjectLinks,
  ProjectLink,
  ProjectPreview,
  ProjectPreviewContent
} from './Projects.style'
import { useInView } from 'react-intersection-observer'
import { useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { variants } from '../../utils/variants'
import { Lead } from '../../styles/utils'
import { customEase } from '../../utils/customEase'
import { ContentfulProject } from '../../types/Project'

interface ProjectProps {
  item: ContentfulProject
}

export const Project: React.FC<ProjectProps> = ({ item }) => {
  const [showPreview, setShowPreview] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
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

  const {
    fields: {
      demoUrl,
      descriptionDetailed,
      githubRepo,
      img,
      preview,
      subTitle,
      techUsed,
      title
    }
  } = item

  const techUsedArr = techUsed.split(',')

  return (
    <_Project ref={projectRef}>
      <ProjectTitle animate={animation} initial='hidden' variants={variants}>
        {title}
        <span>- {subTitle}</span>
      </ProjectTitle>
      <ProjectImage backgroundImage={img.fields.file.url} />
      <AnimatePresence>
        {showPreview && (
          <>
            <ProjectPreview
              initial={{ scale: 0, y: 150, borderRadius: 2000 }}
              animate={{ scale: 1, y: 0, borderRadius: 0 }}
              exit={{ scale: 0, y: 150, borderRadius: 2000 }}
              transition={{ duration: 0.2, ease: customEase }}
            >
              <i
                style={{ color: 'white' }}
                className='fas fa-times'
                onClick={() => setShowPreview(false)}
              />
              <ProjectPreviewContent
                autoPlay
                muted
                loop
                videoLoaded={videoLoaded}
                onLoadedData={() => setVideoLoaded(true)}
              >
                <source src={preview.fields.file.url} type='video/mp4' />
              </ProjectPreviewContent>
            </ProjectPreview>
          </>
        )}
      </AnimatePresence>
      <ProjectInfo>
        <ProjectTech>
          {techUsedArr.map(
            tech =>
              tech + (tech === techUsedArr[techUsedArr.length - 1] ? '' : ' - ')
          )}
        </ProjectTech>
        <Lead>{descriptionDetailed}</Lead>
        <ProjectLinks>
          <ProjectLink
            href={githubRepo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github' />
            <label>code</label>
          </ProjectLink>
          <ProjectLink onClick={() => setShowPreview(true)}>
            <i className='far fa-play-circle' />
            <label>preview</label>
          </ProjectLink>
          <ProjectLink href={demoUrl} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-laptop' />
            <label>demo</label>
          </ProjectLink>
        </ProjectLinks>
      </ProjectInfo>
    </_Project>
  )
}
