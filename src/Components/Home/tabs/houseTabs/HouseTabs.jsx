import React from 'react';
import { Card } from 'react-bootstrap';

const HouseTabs = ({hourse}) => {
  // console.log(tab1);
  const {rating, price,name, picture} = hourse
    return (
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{rating}</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
      
    );
};

export default HouseTabs;