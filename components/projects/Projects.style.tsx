import styled from 'styled-components'
import { motion } from 'framer-motion'

export const _Projects = styled.section`
  background-color: ${props => props.theme.colors.colorPrimary};
  background-image: linear-gradient(rgb(18, 18, 18), rgba(52, 106, 122) 25%);
  display: flex;
  flex-direction: column;
`
export const _Project = styled.div`
  background-color: ${props => props.theme.colors.colorBlack};
  position: relative;
  display: flex;
  margin: 5rem 10rem;

  @media (max-width: 1100px) {
    margin: 3rem 6rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 4rem 2rem;
    height: auto;
  }
  @media (max-width: 600px) {
    margin: 2rem 1rem;
  }

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

  @media (max-width: 800px) {
    top: 0;
    left: 1px;
    margin-left: 0;
    margin-top: -33px;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    left: 1rem;
  }
  @media (max-width: 400px) {
    margin-top: -25px;
    font-size: 3rem;
  }
  span {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`

export const ProjectImage = styled.div<{ backgroundImage: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 50%;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    height: 300px;
  }
`

export const ProjectInfo = styled.div`
  width: 50%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 1100px) {
    padding: 2rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
  }
`
export const ProjectTech = styled.h3`
  margin-bottom: 2rem;
  text-align: center;
`

export const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #bcc0c4;
    transform: translateY(-1px) scale(1.025);
  }

  i {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  label {
    font-weight: 300;
    text-transform: capitalize;
  }
`
export const ProjectPreview = styled(motion.div)`
  background-color: ${props => props.theme.colors.colorBlack};
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 2;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
  }

  i {
    color: ${props => props.theme.colors.colorBlack};
    font-size: 1.5rem;
    position: absolute;
    width: 100%;
    text-align: end;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 3;
  }
`
export const ProjectPreviewContent = styled.video<{ videoLoaded: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 5px;
  background-color: ${props => props.theme.colors.colorBlack};
  opacity: ${props => (props.videoLoaded ? 1 : 0)};
  transition: all 1s ease-in-out;
`
