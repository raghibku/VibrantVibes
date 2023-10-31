import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import UpcomingEvent from './components/UpcomingEvent'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <UpcomingEvent/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
