import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToys = () => {
    // const {user} = useContext(AuthContext)
    // console.log(user.email);
    const handleAddToys = event => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailsDescription = form.detailsDescription.value;
        console.log(photoUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, detailsDescription);

        const addToys = {
            photoUrl :photoUrl,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            availableQuantity,
            detailsDescription

        }
        fetch('https://toyland-server-weld.vercel.app/allToys', {
            method: "POST", 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addToys)
        })
        .then(res => res.json())
        .then(data => {console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully added your toy',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    return (
        <div className="w-1/2  bg-[#1e4a41] my-12 rounded-lg mx-auto px-4 py-8">
            <h1 className="text-3xl text-white font-bold mb-4 text-center">Add A Toy</h1>
            <form onSubmit={handleAddToys} className='font-bold'>
                <div className=" mb-4">
                    <label className="block mb-2 text-white" htmlFor="pictureUrl">
                        Picture URL
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="text"
                        name='photoUrl'
                        placeholder='Picture Url'
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="text"
                        name='name'
                        placeholder='Name'
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="sellerName">
                        Seller Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="text"
                        placeholder='Seller Name'
                        name='sellerName'
                       
                
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="sellerEmail">
                        Seller Email
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="email"
                        name='sellerEmail'
                        placeholder='Seller Email'
                        // value={user.email}
                        // value={email || user}
                    // onChange={(event) => setSellerEmail(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="subCategory">
                        Sub-category
                    </label>
                    <select
                        className="w-full border rounded py-2 px-3"
                        name='subCategory'
                    // value={subCategory}
                    // onChange={(event) => setSubCategory(event.target.value)}
                    >
                        <>
                            <option value="">Select a sub-category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                            <option value="Science Toys">Electronic Toys</option>
                        </>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="number"
                        name='price'
                        placeholder='Price'
                    // value={price}
                    // onChange={(event) => setPrice(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="rating">
                        Rating
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="number"
                        name='rating'
                        placeholder='Rating'
                    // onChange={(event) => setRating(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="quantity">
                        Available Quantity
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="number"
                        name='availableQuantity'
                        placeholder='Available Quantity'
                    // onChange={(event) => setQuantity(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="description">
                        Detail Description
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type='text'
                        name='detailsDescription'
                        placeholder='Details Description'
                    // onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <button className="btn btn-outline btn-accent">Add Toys</button>

            </form>
        </div>
    );
};

export default AddToys;