import React from 'react';
import ServicePart from '../Home/ServicePart';

const AllService = () => {
    const services = [
        {
            _id:1,
            name:'Web development',
            img:'https://stiffentechnologies.com/wp-content/uploads/2021/11/Web-Development.jpg',
            details:'We provide pixel perfect website with reasonable price.'
        },
        {
            _id:2,
            name:'App development',
            img:'https://reliasoftware.com/static/9ce8aa204a21e69716018fee472b042c/the-complete-guide-to-mobile-app-development-2021.png',
            details:'We provide pixel perfect mobile app with reasonable price.'
        },
        {
            _id:3,
            name:'Artificial intelligence',
            img:'https://www.aljazeera.com/wp-content/uploads/2023/01/GettyImages-1215125159.jpg?resize=1800%2C1800',
            details:'We provide pixel perfect website with reasonable price.'
        },
        {
            _id:4,
            name:'Graphics design',
            img:'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/1071218_Graphic-Design.jpg',
            details:'We provide pixel perfect website with reasonable price.'
        },
        {
            _id:5,
            name:'SOFTWARE TESTING',
            img:'https://devops.com/wp-content/uploads/2020/04/Software-Testing-1280x720.jpg',
            details:'We provide pixel perfect website with reasonable price.'
        },
        {
            _id:6,
            name:'Digital marketing',
            img:'https://www.salford.ac.uk/sites/default/files/2021-07/digital%20marketing.png',
            details:'We provide pixel perfect website with reasonable price.'
        }
    ]
    return (
        <div>
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