import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled.header`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
    rgba(38, 79, 92, 0.75),
    rgba(18, 18, 18, 1)
  );
  background-size: cover;
  background-position: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;

  span {
    font-family: sans-serif;
    transition: all 0.5s ease-in-out;
  }

  & a:hover + span {
    transition: all 0.5s ease-in-out;
    transform: translateY(0.5rem);
  }

  & a:active + span {
    transform: translateY(1rem);
  }
`

export const _HeroVid = styled.div<{ loaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.5;
  overflow: hidden;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity 2s ease-in-out;
`

export const HeroVidContent = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
`
export const HeroTextTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
`

export const HeroSubtext = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 200%);
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
`

export const HeroTextSubtitle = styled(motion.h2)`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`
