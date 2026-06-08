// import { useState } from 'react'
import './App.css'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'
import Stack from './Components/Stack/Stack'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Projects/>
    <Stack />
    <Contact/>
    </>
  )
}

export default App
