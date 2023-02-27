import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Blogpart from './Blogpart';

const Blogs = () => {

    const [blogs,setBlogs]= useState([])
    useEffect(()=>{
        fetch('https://danriyal-solution-server-8ynoqanm8-sagorsikder.vercel.app/shortBlogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div  className='w-[90%] mx-auto mt-[100px]' id='blogSection'>
            
            <h1 className='text-5xl text-center mb-10 font-semibold text-blue-700 mt-10'>Blogs</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-[20px] sm:grid-cols-1'>
          {
                blogs.map(blog=><Blogpart key={blog._id} blogs={blog}></Blogpart>)
            }
          </div>
          <div className='flex justify-center mt-10'><Link to='/allblogs' className='btn btn-primary '>More blogs</Link></div>
        </div>
    );
};

export default Blogs;