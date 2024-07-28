import React from 'react'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'

function Hero() {
  return (
    <section className="bg-black">
        <div className='flex items-baseline 
        justify-center pt-20'>
        <h2 className='text-white border 
            px-3 p-2 rounded-full
        text-center border-white'>Let's Explore <span className='text-sky-300'><RegisterLink> Think And Sketch </RegisterLink></span></h2>

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
      Visualize and document 
        <strong className="font-extrabold text-white sm:block"> 
        your projects with ease. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-200">
      A comprehensive markdown editor, interactive collaborative canvas, and versatile diagram-as-code creator all in one platform
      </p>
    </div>
  </div>
</section>
  )
}

export default Hero