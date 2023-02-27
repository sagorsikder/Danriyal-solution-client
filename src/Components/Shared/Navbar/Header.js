import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo without bg.png'

const Header = () => {

    const nav = <>
        <li><a href='#aboutSection' className=' text-[20px]  font-semibold'>About</a></li>
        <li><a href='#serviceSection' className=' text-[20px]  font-semibold'>Service</a></li>
        <li><a href='#blogSection' className=' text-[20px]  font-semibold'>Blog</a></li>
        <li><a href='#contactSection' className=' text-[20px]  font-semibold'>Contact Us</a></li>
    </>

    return (
        <div className="navbar w-[90%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
         {nav}
      </ul>
    </div>
    <div className='flex'>
    <Link to='/'><img className='w-[50px] h-[50px]' src={logo} alt="Logo" /></Link>
    <div className='ms-3'>
        <h1 className=' text-[16px]  font-semibold'>Danriyal</h1>
        <h1 className=' text-[16px] font-semibold'>Solutions</h1>
    </div>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  
</div>
    );
};

export default Header;