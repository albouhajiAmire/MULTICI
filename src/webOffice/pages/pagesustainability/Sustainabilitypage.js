import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/header/Navbar'
import HeroSust from '../../components/testimonials/HeroSust'
import Sustainability from '../../components/testimonials/Sustainability'

function Sustainabilitypage(props) {
  const socket = props.socket
  return (
    <>
    <Navbar/>
    <HeroSust/>
    <Sustainability/>
    <Footer  socket={socket}/>
    </>
  )
}

export default Sustainabilitypage