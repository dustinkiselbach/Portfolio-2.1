import { _HeroVid, HeroVidContent } from './Hero.style'
import { useState } from 'react'

interface HeroVidProps {}

export const HeroVid: React.FC<HeroVidProps> = ({}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <_HeroVid loaded={loaded}>
      <HeroVidContent autoPlay muted loop onLoadedData={() => setLoaded(true)}>
        <source src='/vid.mp4' type='video/mp4' />
      </HeroVidContent>
    </_HeroVid>
  )
}
