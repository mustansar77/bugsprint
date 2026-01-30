import React from 'react'
import HeroSection from './component/HeroSection'
import HowWork from './component/HowWork'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import Cta from './component/Cta'
import WhatWeOffer from './whatweoffer/page'
import Faq from './component/Faq'
import Demo from './component/Demo'


const page = () => {
  return (
    <>
    
    <HeroSection/>
    <WhatWeOffer/>
    <HowWork/>
    <Demo/>
    <Testimonials/>
    <Pricing/>
    <Cta/>
    <Faq/>
    </>
  )
}

export default page