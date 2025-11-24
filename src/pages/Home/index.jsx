import React from 'react'
import Hero from './Hero'
import FeatureSlider from './FeatureHighlight'
import WhyChooseUs from './WhyUs'
import HighlightCTA from './FInalCTA'
import { useScrollToSection } from '../../hooks/useScrollToSection'

const Home = () => {
  useScrollToSection();
  
  return (
    <div>
      <Hero/>
      <FeatureSlider/>
      <WhyChooseUs/>
      <HighlightCTA/>
    </div>
  )
}

export default Home
