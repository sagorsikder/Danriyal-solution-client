import React from 'react';
import robot from '../../../Assets/Robotics.jpg'

const Robot = () => {
    return (
        <div className="my-[100px] lg:w-[80%] mx-auto">
        <div className="hero-content justify-between flex-col lg:flex-row">
          <img src={robot} alt='Robot' className="max-w-sm rounded-lg shadow-2xl" />
          <div className=''>
            <p className='lg:text-[30px]  font-semibold'>Benefitting others through</p>
            <p className='lg:text-[30px]  font-semibold'> the use of technology  </p>
          </div>
        </div>
      </div>
    );
};

export default Robot;