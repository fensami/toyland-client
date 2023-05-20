import React from 'react';
import { FaBeer, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToy = ({myToy, handleDelete}) => {
    const {name, _id} = myToy;

    return (
        <tr>
        <th></th>
        <td>{name}</td>
        <td>Quality Control Specialist</td>
        <td><Link to={`/updateToys/${_id}`}>Update</Link></td>
        <td onClick={() =>handleDelete(_id)}><FaTrash /></td>

        {/* <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link> */}
      </tr>
    );
};

export default MyToy;