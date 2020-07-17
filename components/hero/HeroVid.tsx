import { _HeroVid, HeroVidContent } from './Hero.style'
import { useState } from 'react'

interface HeroVidProps {}

const videoUrl = 'https://dustin-portfolio.s3.amazonaws.com/Vid.mp4'

export const HeroVid: React.FC<HeroVidProps> = ({}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <_HeroVid loaded={loaded}>
      <HeroVidContent autoPlay muted loop onLoadedData={() => setLoaded(true)}>
        <source src='/Vid.mp4' type='video/mp4' />
      </HeroVidContent>
    </_HeroVid>
  )
}
