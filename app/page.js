"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/page"
import Hero from "./components/Hero/page"
import Features from "./components/Feature/page"
import Footer from "./components/Footer/page"
import Loader from "./components/Loader/page"
import AboutCenter from "./components/About/page"
import PillarsOfIslam from "./components/PillarOfIslam/page"
import IslamicResources from "./components/IslamicResource/page"


export default function Home(){

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1200)
  },[])

  if(loading) return <Loader/>

  return(
    <>
      <Navbar/>
      <Hero/>
      <AboutCenter/>
      <PillarsOfIslam/>
      <IslamicResources/>
      <Features/>
      <Footer/>
    </>
  )
}