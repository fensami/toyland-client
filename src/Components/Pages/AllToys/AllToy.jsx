import React from 'react';

const AllToy = ({allToy}) => {
    console.log(allToy);
    const {_id, name,sellerName,subCategory,availableQuantity, price} = allToy

    return (
        <tr>
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{availableQuantity}</td> 
        <td>View Details</td> 
        {/* <td>12/16/2020</td>  */}
        {/* <td>Blue</td> */}
      </tr>
    );
};

export default AllToy;