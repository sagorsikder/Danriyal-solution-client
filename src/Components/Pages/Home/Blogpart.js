import React from 'react';

const Blogpart = ({blogs}) => {
    const {name,details,img} = blogs;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className='max-h-[300px] w-full' src={img} alt="service" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default Blogpart;