import React from 'react'

function AboutUs() {
  return (
    <div name='about' id='aboutSection' className='mt-36 lg:mt-36 mx-8 lg:mx-36'>
        <div className='text-center'>
        <h2 className='text-red-500 text-5xl mb-2'>About Us</h2>
        <h2 className='text-4xl font-semibold mb-8'>Need to <span className='text-blue-500'>know about</span> the Company</h2>
        <h2 className='text-base mb-16'>Danriyal Solutions Technologies, Bangladesh based custom software development & consulting company focusing on web, mobile, AI, desktop & embedded software development. We always try to provide good service to the client so that they always have atrust in us.</h2>
        </div>
      <div className='lg:grid lg:grid-cols-2 gap-4'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-32 lg:ml-0 lg:mr-12 mr-0'>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-black font-bold mb-4'>100+</h2>
                <h2 className='text-xs'>Active Users</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-sky-400 font-bold mb-4'>10+</h2>
                <h2 className='text-xs'>Team Members</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-blue-500 font-bold mb-4'>2 Years</h2>
                <h2 className='text-xs'>In Business</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-yellow-400 font-bold mb-4'>10+</h2>
                <h2 className='text-xs'>Clients Worldwide</h2>
            </div>
            <div className='h-36 w-44 border-2 items-center text-center pt-8 p-8 bg-gray-100 shadow-lg rounded-bl-3xl rounded-tr-3xl'>
                <h2 className='text-3xl text-red-500 font-bold mb-4'>45+</h2>
                <h2 className='text-xs'>Projects Completed</h2>
            </div>
        </div>
        <div className='mt-8 lg:mt-0'>
        <h2 className='text-red-500 text-2xl font-semibold mb-3'>Our Story</h2>
        <h2 className='text-4xl font-semibold leading-normal'>A Great Story Starts with a <br/> Friendly Team</h2>
        <h2 className='text-base text-black subpixel-antialiased mt-4'>Our company started with some of our friends. The aim of all of them was to bring the world's best ranking with good service by showing their work skiils.</h2>
        </div>
        </div>
      </div>
  )
}

export default AboutUs