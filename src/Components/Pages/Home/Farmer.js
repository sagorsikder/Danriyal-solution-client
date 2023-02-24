import React from 'react';
import farmer from '../../../Assets/Farmer.jpg'

const Farmer = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={farmer} alt='Farmer' className="max-w-sm w-[50%] rounded-lg shadow-2xl" />
    <div className=''>
      <p className='text-[20px] font-semibold'>Committed to significantly ease our</p>
      <p className='text-[20px] font-semibold'>lives with a little help from our </p>
      <p className='text-[20px] font-semibold'> products and services </p>
    </div>
  </div>
</div>
    );
};

export default Farmer;