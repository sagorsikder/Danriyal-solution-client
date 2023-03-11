import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import ServicePart from './ServicePart';

const Service = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://danriyal-solution-server-8ynoqanm8-sagorsikder.vercel.app/shortServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err=>console.log(err))
    },[])

    return (

        // Service part here

        <div className='w-[90%] mx-auto' id='serviceSection'>
            <h1 className='text-5xl text-center mb-10 font-semibold text-red-500'>Our Services</h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] sm:grid-cols-1'>
          {
                services.map(service=><ServicePart key={service._id} services={service}></ServicePart>)
            }
          </div>
          <div className='flex justify-center mt-10'><Link to='/allservices' className='btn bg-[#61ce70]'>More services</Link></div>
        </div>
    );
};

export default Service;