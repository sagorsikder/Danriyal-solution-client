import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../../Assets/neural-pathways.jpg'

const Contact = () => {


    const form = useRef();
   



    const handleContactForm=(event)=>{

        event.preventDefault();

        emailjs.sendForm('service_3hsh9b4', 'template_s7myp8i', form.current, 'DKWyI2ooTIfcl_kRd')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully')
          event.target.reset()
      }, (error) => {
          console.log(error.text);
      });
        
    }
    
    return (
        
        // Contact section here
         
        <div  className='w-[90%] mx-auto mt-[100px]' id='contactSection'>
            <img src={contact}/>
            <h2 className='text-center text-red-500 text-5xl my-3 py-3 font-semibold'>Contact form</h2>
            <form ref={form} onSubmit={handleContactForm} className='w-75  mb-5 mx-auto '>
                
                <div className=" w-full ">
                <label className="label">
                    <span className="label-text text-[16px] font-semibold">What is your name?</span>
                </label>
                <input name='user_name' type="text" placeholder="Type here your name" className="input input-bordered w-full  " />
                </div>
                <div className=" w-full  ">
                <label className="label">
                    <span className="label-text text-[16px]  mt-3 font-semibold">What is your email?</span>
                </label>
                <input name='user_email' type="email" placeholder="Type here your email" className="input input-bordered w-full  " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[16px] mt-3 font-semibold">How can we help you?</span>
                    </label> 
                    <textarea name='message' className="textarea w-full textarea-bordered h-24" placeholder="Please tell me details"></textarea>
                    </div>

                    <div className='w-full flex justify-center'><input className='btn bg-[#61ce70]' type="submit" value="Send Email" /></div>
            </form>
        </div>
    );
};

export default Contact;