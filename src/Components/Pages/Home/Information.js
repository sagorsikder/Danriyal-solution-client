import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../../Assets/Explore stories.jpg'

function Information() {
  return (
    <div className="my-[100px] lg:w-[80%] mx-auto">
      <div className='lg:w-[60%] text-center mx-auto my-[80px]'>
      <div>
        <p className='lg:text-[30px]  font-semibold'>Offering convenience through the</p>
        <p className='lg:text-[30px]  font-semibold'>knowledge of information & technology</p>
      </div>
      <Link to='/allblogs' className='btn bg-[#61ce70] mt-[10px]'>Explore all our stories &
            articles</Link>
      </div>

        <img className='w-full' src={picture}/>
    </div>
  )
}

export default Information
