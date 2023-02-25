import React from 'react';
import Blogs from '../Blogs';
import Contact from '../Contact';
import Farmer from '../Farmer';
import Image from '../Image';
import Robot from '../Robot';
import Service from '../Service';
import TextBox from '../TextBox';

const Home = () => {
    return (
        <div>
            <Image></Image>
            <TextBox></TextBox>
            <Farmer></Farmer>
            <Robot></Robot>
            <Service></Service>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;