import React from 'react'
import { _About, AboutText } from './About.style'

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <_About id='about'>
      <AboutText>
        I'm a Full Stack Developer based in New York City. I work in TypeScript,
        Node, Python, and SCSS to make beautiful, function websites and web
        applications. My current stack includes ReactJS, TypeScript, Styled
        Components, Redux, Express, and MongoDB.
      </AboutText>
    </_About>
  )
}
