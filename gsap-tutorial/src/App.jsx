import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

  const gsapRef = useRef()
  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x: 1000,
      duration: 2,
      delay: 1,
      y: 100,
      rotate: 360
    })
  })

  useGSAP(()=>{
    gsap.to("#box",{
      x: 1000,
      duration: 2,
      delay: 1
    })
  })
  return (
    <div className='px-5 py-5 bg-pink-50 h-screen w-full'>
      <div id='box' className='bg-gray-400 w-80 h-80 rounded-3xl'></div>
      <div ref={gsapRef} className='bg-gray-400 w-80 h-80 rounded-3xl'></div>
    </div>
  )
}

export default App