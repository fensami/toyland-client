import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';



const MyToy = ({ myToy, handleDelete }) => {
    const { name, _id, price ,photoUrl,sellerName,subCategory,availableQuantity} = myToy;

    return (
        <tr>
            
            <th><img className='w-20' src={photoUrl} alt="" /></th>
            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td className='font-bold '><Link to={`/updateToys/${_id}`}> <BiEdit className='w-12 ' style={{ fontSize: '2rem' }} ></BiEdit></Link></td>
            <td className='text-red-500' onClick={() => handleDelete(_id)} ><FaTrash className='w-12 ' style={{ fontSize: '1.5rem' }} /></td>
        </tr>
    );
};

export default MyToy;