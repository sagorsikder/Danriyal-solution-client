import React,{useState,useEffect} from 'react';
import Blogpart from '../Home/Blogpart';

const AllBlogs = () => {
    const [blogs,setBlogs]= useState([])
    useEffect(()=>{
        fetch('https://danriyal-solution-server-8ynoqanm8-sagorsikder.vercel.app/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            
            <h1 className='text-5xl text-center mb-10 font-semibold text-blue-700 mt-10'>Blogs</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-[20px] sm:grid-cols-1'>
          {
                blogs.map(blog=><Blogpart key={blog._id} blogs={blog}></Blogpart>)
            }
          </div>
        </div>
    );
};

export default AllBlogs;