import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys , setMyToys] = useState([]);
   
    const url = `https://toyland-server-weld.vercel.app/allToys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=> setMyToys(data))
    },[])

    //delete
    const handleDelete = id => {
          Swal.fire({
          title: 'Are you sure?',
          text: "You want to delete your toy",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            fetch(`https://toyland-server-weld.vercel.app/allToys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
                if(data.deletedCount >0){
                  Swal.fire(
                    'Deleted!',
                    'Your toy has been deleted.',
                    'success'
                  )
                }
            })
          }
        })
    }

   
    
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-8 text-[#306d61]'>My Toys</h1>
            <div className="overflow-x-auto w-2/3 mx-auto">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>Images</th>
        <th>Name</th>
        <th>Saller Name</th>
        <th>subCategory</th>
        <th>availableQuantity</th>

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