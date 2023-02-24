import React from 'react';
import Farmer from '../Farmer';
import Image from '../Image';
import Robot from '../Robot';
import TextBox from '../TextBox';

const Home = () => {
    return (
        <div>
            <Image></Image>
            <TextBox></TextBox>
            <Farmer></Farmer>
            <Robot></Robot>
        </div>
    );
};

export default Home;