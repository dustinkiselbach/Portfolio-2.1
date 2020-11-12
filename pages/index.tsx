import Head from 'next/head'
import { Hero } from '../components/hero/Hero'
import { useState, useEffect } from 'react'
import { NavBar } from '../components/navbar/NavBar'
import { About } from '../components/about/About'
import { Projects } from '../components/projects/Projects'
import { ContentfulProject } from '../types/Project'
import { Contact } from '../components/contact/Contact'
const contentful = require('contentful')

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

interface HomeProps {
  items: ContentfulProject[]
}

const Home: React.FC<HomeProps> = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [height, setHeight] = useState(500)
  const [width, setWidth] = useState(500)

  useEffect(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)

    let vh = height * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize () {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [height])

  return (
    <>
      <Head>
        <title>Dustin Kiselbach</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800'
          rel='stylesheet'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
          rel='stylesheet'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/site-preview.png' key='ogimage' />
        <meta
          property='og:site_name'
          content='Dustin Kiselbach - Web Developer'
          key='ogsitename'
        />
        <meta property='og:title' content='Home' key='ogtitle' />
        <meta
          property='og:description'
          content="Hi, I'm Dustin. I'm a passionate web developer who works in TypeScript, Node, Python, and SCSS to make beautiful, functional websites and web applications."
          key='ogdesc'
        />
      </Head>
      <NavBar showMenu={showMenu} width={width} />
      <Hero setShowMenu={setShowMenu} />
      <About />
      <Projects items={items} />
      <Contact />
    </>
  )
}

export async function getStaticProps () {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.ACCESS_TOKEN
  })

  const res = await client.getEntries()

  const items = res.items

  return {
    props: {
      items
    }
  }
}

export default Home
