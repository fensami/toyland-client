import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToy from './AllToy';

const AllToys = () => {
//    const [allToys , setAll]
const allToys = useLoaderData();
const {name, _id} = allToys


    return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
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
    <tbody>
    {
        allToys.map(allToy => <AllToy
        key={allToy}
        allToy={allToy}
        ></AllToy>)
    }
    </tbody> 
    {/* <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot> */}
  </table>
</div>
    );
};

export default AllToys;