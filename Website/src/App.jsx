import React from 'react'
import Nav from './Components/Nav'
import Landingpage from './Components/Landingpage'
import Mark from './Components/Mark'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import Trial from './Components/Trial'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
    <Nav />
    <Landingpage />
    <Mark />
    <About />
    <Eyes />
    <Cards />
    <Footer />
    </div>
  )
}

export default App