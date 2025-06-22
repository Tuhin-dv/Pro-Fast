import React from 'react'
import Banner from '../banner/Banner'
import ServicesCard from '../components/ServicesCard'
import HowItWork from '../components/HowItWork'
import BrandsMarquee from '../brandsMarquee/BrandsMarquee'
import FeatureCards from '../components/FeatureCards'
import Merchant from '../components/Merchant'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <ServicesCard></ServicesCard>
     <div className=' border-b-2 border-dashed border-black pb-10'>
       <BrandsMarquee></BrandsMarquee>
     </div>
      <FeatureCards></FeatureCards>
      <Merchant></Merchant>
      <TestimonialSlider></TestimonialSlider>
      <FAQ></FAQ>
      <h1>home</h1>
      </div>
  )
}

export default Home