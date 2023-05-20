import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToy from './MyToy';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys , setMyToys] = useState([]);
    // const {_id} = myToys;
    // const navigate = useNavigate();
    const url = `http://localhost:5000/allToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=> setMyToys(data))
    },[])

    //delete
    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/allToys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount >0){
                    alert('deleted successful')
                }
            })
        }
    }

    // const handleBookingConfirm = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = bookings.filter(booking => booking._id !== id);
    //                 const updated = bookings.find(booking => booking._id === id);
    //                 updated.status = 'confirm'
    //                 const newBookings = [updated, ...remaining];
    //                 setBookings(newBookings);
    //             }
    //         })
    // }
    
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#306d61]'>My Toys</h1>
            <div className="overflow-x-auto w-1/2 mx-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      
      {
        myToys.map((myToy, index) => <MyToy
        key={index}
        myToy={myToy}
        handleDelete={handleDelete}
        ></MyToy> )
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;