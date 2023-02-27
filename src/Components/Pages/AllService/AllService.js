import React,{useEffect, useState} from 'react';
import ServicePart from '../Home/ServicePart';

const AllService = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://danriyal-solution-server-8ynoqanm8-sagorsikder.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='w-[90%] mx-auto' >
            <h1 className='text-5xl text-center font-semibold mb-10 text-blue-700'>Our All Services</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] sm:grid-cols-1'>
          {
                services.map(service=><ServicePart key={service._id} services={service}></ServicePart>)
            }
          </div>
        </div>
    );
};

export default AllService;