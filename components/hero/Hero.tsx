import {
  Header,
  HeaderBottom,
  HeroText,
  HeroTextTitle,
  HeroTextSubtitle,
  HeroSubtext
} from './Hero.style'
import { HeroVid } from './HeroVid'
import { customEase } from '../../utils/customEase'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

interface HeroProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const Hero: React.FC<HeroProps> = ({ setShowMenu }) => {
  return (
    <Header id='home'>
      <HeroVid />
      <HeroText>
        <HeroTextTitle
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: customEase, duration: 0.6 }}
        >
          Dustin Kiselbach
        </HeroTextTitle>
      </HeroText>
      <HeroSubtext>
        <HeroTextSubtitle
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ ease: customEase, duration: 0.4, delay: 0.6 }}
        >
          Web Developer
        </HeroTextSubtitle>
      </HeroSubtext>
      <div />
      <HeaderBottom>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: customEase, duration: 0.4, delay: 1.4 }}
          onAnimationComplete={() => setShowMenu(true)}
          href='#projects'
        >
          Projects
        </motion.a>
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: customEase, duration: 0.2, delay: 1 }}
        >
          &darr;
        </motion.span>
      </HeaderBottom>
    </Header>
  )
}
