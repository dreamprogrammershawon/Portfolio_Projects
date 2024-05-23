import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Work from './components/Work/Work'
import WorkProcess from './components/WorkProcess/WorkProcess'
import Skills from './components/Skills/Skills'
import Stats from './components/Stats/State'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <div className='holder'>
<Header/>
<AboutUs/>
<Testimonials/>
<Skills/>
<Stats/>
<Work/>
<WorkProcess/>
<Services/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App