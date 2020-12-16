import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled.header`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  align-items: center;
  background-image: linear-gradient(
    rgba(38, 79, 92, 0.75),
    rgba(18, 18, 18, 1)
  );
  background-size: cover;
  background-position: center;
  /* padding: 1rem; */
  position: relative;
  overflow: hidden;
`

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in-out;

  margin-top: 4rem;
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

export const _HeroImg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
  background-image: url('./hero-img.jpg');
  background-position: center center;
  transition: opacity 2s ease-in-out;
`

export const HeroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  z-index: 2;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`
export const HeroTextTitle = styled(motion.h1)`
  font-size: 5rem;
  margin: 0;

  font-weight: 400;
  letter-spacing: 0.05rem;
  @media (max-width: 1250px) {
    font-size: 4rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`

export const HeroSubtext = styled.div`
  margin-top: 9px;

  z-index: 2;
  overflow: hidden;
`

export const HeroTextSubtitle = styled(motion.h2)`
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`
export const Button = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.9);
  padding: 0.9rem 2rem;

  &:hover {
    @media (min-width: 900px) {
      background-color: rgba(255, 255, 255, 0.9);
      color: ${props => props.theme.colors.colorBlack};
    }
  }
  transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
`
