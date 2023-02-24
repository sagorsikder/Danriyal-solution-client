import React from 'react';
import robot from '../../../Assets/Robotics.jpg'

const Robot = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={robot} alt='Robot' className="max-w-sm w-[50%] rounded-lg shadow-2xl" />
          <div className=''>
            <p className='text-[20px] font-semibold'>Benefitting others through</p>
            <p className='text-[20px] font-semibold'> the use of technology  </p>
          </div>
        </div>
      </div>
    );
};

export default Robot;