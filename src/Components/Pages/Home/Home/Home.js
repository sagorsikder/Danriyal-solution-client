import React from 'react';
import About from '../About';
import Blogs from '../Blogs';
import Contact from '../Contact';
import Farmer from '../Farmer';
import Image from '../Image';
import Robot from '../Robot';
import Service from '../Service';
import TextBox from '../TextBox';

const Home = () => {
    return (
        
        // Home page organized here

        <div>
            <Image></Image>
            <TextBox></TextBox>
            <Farmer></Farmer>
            <Robot></Robot>
            <Service></Service>
            <Blogs></Blogs>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;