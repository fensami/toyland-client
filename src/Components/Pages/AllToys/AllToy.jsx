import React from 'react';
import { Link } from 'react-router-dom';

const AllToy = ({allToy}) => {
    console.log(allToy);
    const {_id, name,sellerName,subCategory,availableQuantity, price} = allToy

    return (
        <tr className='font-bold'>
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{availableQuantity}</td> 
        <td ><Link to={`/viewDetails/${_id}`}>View Details</Link></td> 
      
      </tr>
    );
};

export default AllToy;