import React from 'react';
import { Link } from 'react-router-dom';
import Blogpart from './Blogpart';

const Blogs = () => {

    const blogs = [
        {
            _id:1,
            name:'Chat GPT',
            img:'https://images.imyfone.com/filme/assets/article/chat-gpt.jpg',
            details:'Proprietary. Website. chat.openai.com/chat. ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy, however, has been identified as a significant drawback.'
        },
        {
            _id:2,
            name:'Website',
            img:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png',
            details:'Web site. A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. Each web page of a given website provides explicit links—most of the time in the form of clickable portions of text—that allow the user to move from one page of the website to another.'
        },
        {
            _id:3,
            name:'Software Quality Assurance',
            img:'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png',
            details:'Software Quality Assurance (SQA) is simply a way to assure quality in the software. It is the set of activities which ensure processes, procedures as well as standards are suitable for the project and implemented correctly. Software Quality Assurance is a process which works parallel to development of software. It focuses on improving the process of development of software so that problems can be prevented before they become a major issue. Software Quality Assurance is a kind of Umbrella activity that is applied throughout the software process.'
        }
    ]
    return (
        <div>
            
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