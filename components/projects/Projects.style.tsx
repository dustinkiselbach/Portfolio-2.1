import styled from 'styled-components'
import { motion } from 'framer-motion'

export const _Projects = styled.section`
  background-color: ${props => props.theme.colors.colorPrimary};
  display: flex;
  flex-direction: column;
`
export const _Project = styled.div`
  background-color: ${props => props.theme.colors.colorBlack};
  position: relative;
  display: flex;
  margin: 5rem 10rem;
  border-radius: 2px;
  box-shadow: 0 1rem 2rem rgba(18, 18, 18, 0.7);
  height: 30rem;
`
export const ProjectTitle = styled(motion.h1)`
  position: absolute;
  font-weight: 400;
  font-size: 4rem;
  bottom: 10px;
  left: 0;
  margin-left: -75px;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`

export const ProjectImage = styled.div<{ backgroundImage: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.backgroundImage});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  width: 50%;
  height: 100%;
`

export const ProjectInfo = styled.div`
  width: 50%;
  padding: 4rem;
`
export const ProjectTech = styled.h3`
  margin-bottom: 2rem;
`

export const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  i {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  label {
    font-weight: 300;
    text-transform: capitalize;
  }
`
