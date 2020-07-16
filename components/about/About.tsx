import React from 'react'
import { _About, AboutText } from './About.style'

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <_About id='about'>
      <AboutText>
        Dustin Kiselbach is a fullstack devoloper based in New York City. He
        works in TypeScript, Node, Python, and SCSS to make beautful, function
        websites and web applications. His current stack includes ReactJS,
        TypeScript, Styled Components, Framer Motion, Redux, Express, and
        MongoDB.
      </AboutText>
    </_About>
  )
}
