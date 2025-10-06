import React from 'react'
import Hero from '../../components/hero/Hero'
import Benefits from '../../components/benefits/Benefits'
import Quote from '../../components/quote/Quote'


export default function Home () {
  return (
      <div id="root">
      
    <main>
      <Hero />
      <Benefits />
      <Quote />
    </main>
  
    </div>
  )
}
