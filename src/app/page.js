import React from 'react'
import HeroSection from './component/HeroSection'
import HowWork from './component/HowWork'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import Cta from './component/Cta'
import WhatWeOffer from './whatweoffer/page'


const page = () => {
  return (
    <>
    
    <HeroSection/>
    <WhatWeOffer/>
    <HowWork/>
    <Pricing/>
    <Testimonials/>
    <Cta/>
    </>
  )
}

export default page