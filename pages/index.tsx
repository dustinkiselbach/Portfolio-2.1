import Head from 'next/head'
import { Hero } from '../components/hero/Hero'
import { useState, useEffect } from 'react'
import { NavBar } from '../components/navbar/NavBar'
import { About } from '../components/about/About'
import { Projects } from '../components/projects/Projects'

function debounce (fn: () => void, ms: number) {
  let timer: number
  return () => {
    clearTimeout(timer)
    timer = setTimeout(function () {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [height, setHeight] = useState(500)

  useEffect(() => {
    setHeight(window.innerHeight)

    let vh = height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize () {
      setHeight(window.innerHeight)
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [height])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800'
          rel='stylesheet'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
          rel='stylesheet'
        />
      </Head>
      <NavBar showMenu={showMenu} />
      <Hero setShowMenu={setShowMenu} />
      <About />
      <Projects />
    </>
  )
}

export default Home