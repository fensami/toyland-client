import React from 'react';
import {  FaTrash } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const MyToy = ({myToy, handleDelete}) => {
    const {name, _id,price} = myToy;

    return (
        <tr>
        <th></th>
        <td>{name}</td>
        <td>{price}</td>
        <td className='font-bold '><Link to={`/updateToys/${_id}`}> <BiEdit className='w-12 ' style={{fontSize: '2rem'}}></BiEdit></Link></td>
        <td className='text-red-500' onClick={() =>handleDelete(_id)}><FaTrash className='w-12 ' style={{fontSize: '1.5rem'}} /></td>
{/* 
        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link> */}
      </tr>
    );
};

export default MyToy;