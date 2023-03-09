import React from 'react';
import cover from '../../../Assets/Cover.jpg'

const Image = () => {
    return (

        //  Cover image added
        
        <div>
            <img className='w-full' src={cover} alt="Nature"  />
        </div>
    );
};

export default Image;