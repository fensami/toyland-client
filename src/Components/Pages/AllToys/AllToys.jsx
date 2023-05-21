import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';

const AllToys = () => {
//    const [allToys , setAll]
const allToys = useLoaderData();
// const {name, _id} = allToys


    return (
        <div className="overflow-x-auto">
  <table className="table table-compact  w-2/3 my-12 border mx-auto">
    <thead >
      <tr>
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Sub_Category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>view Details</th> 
        {/* <th>Last Login</th>  */}
        {/* <th>Favorite Color</th> */}
      </tr>
    </thead> 
    <tbody >
    {
        allToys.map((allToy, index) => <AllToy
        key={index}
        allToy={allToy}
        ></AllToy>)
    }
    </tbody> 
  </table>
</div>
    );
};

export default AllToys;