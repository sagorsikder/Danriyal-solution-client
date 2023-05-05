import React from 'react';
import robot from '../../../Assets/Robotics.jpg'
import { Link } from 'react-router-dom';

const Robot = () => {
    return (

      // Robot part here
      
        <div className="my-[100px] lg:w-[80%] mx-auto">
        <div className="hero-content justify-between flex-col lg:flex-row">
          <img src={robot} alt='Robot' className="max-w-sm rounded-lg shadow-2xl" />
          <div className=''>
            <p className='lg:text-[30px]  font-semibold'>Benefitting others through</p>
            <p className='lg:text-[30px]  font-semibold'> the use of technology  </p>
            <Link to='/allservices' className='btn bg-[#61ce70]  mt-[10px]'>View all our services</Link>
          </div>
        </div>
      </div>
    );
};

export default Robot;