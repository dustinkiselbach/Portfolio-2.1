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
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { HeroImg } from './HeroImg'

interface HeroProps {
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

const detectMob = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 800 && window.innerHeight <= 900
  }
}

export const Hero: React.FC<HeroProps> = ({ setShowMenu }) => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(detectMob())
  }, [])

  return (
    <Header id='home'>
      {mobile ? <HeroImg /> : <HeroVid />}

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
