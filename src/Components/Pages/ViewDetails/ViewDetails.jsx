import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData();
    const {_id, name,sellerName,sellerEmail,subCategory,availableQuantity, price, photoUrl} =data;

    //picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
    return (
        <div className="max-w-md mx-auto my-12 border  bg-[#38776a] ` shadow-lg rounded-lg overflow-hidden">
        <img className="w-1/2 mx-auto p-4 h-56" src={photoUrl} alt="" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-white">Toy Info</h2>

          <p className="text-gray-200 mb-2">Toy Name: {name}</p>
          <p className="text-gray-200 mb-2">Seller Name: {sellerName}</p>
          <p className="text-gray-200 mb-2">Seller Email: {sellerEmail}</p>
          <p className="text-gray-200 mb-2">Price: {price}</p>
          <p className="text-gray-200 mb-2">Rating: 4.5</p>
          <p className="text-gray-200 mb-2">Available Quantity: 10</p>
          <p className="text-gray-200 mb-2">Description: This is a fantastic toy with lots of features!</p>
        </div>
      </div>
    );
};

export default ViewDetails;