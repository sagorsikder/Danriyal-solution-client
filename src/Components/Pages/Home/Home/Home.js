import React from 'react';
import AboutUs from '../About';
import Blogs from '../Blogs';
import Contact from '../Contact';
import Farmer from '../Farmer';
import Image from '../Image';
import Robot from '../Robot';
import Service from '../Service';
import TextBox from '../TextBox';
import Information from '../Information';

const Home = () => {
    return (
        
        // Home page organized here

        <div>
            <Image></Image>
            <TextBox></TextBox>
            <Farmer></Farmer>
            <Robot></Robot>
            <Information></Information>
            <Service></Service>
            <Blogs></Blogs>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;