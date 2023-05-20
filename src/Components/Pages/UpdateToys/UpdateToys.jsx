import React from 'react';
import { json, useLoaderData } from 'react-router-dom';

const UpdateToys = () => {
    const myToys = useLoaderData();
    const {price, availableQuantity, detailsDescription, _id} = myToys;
    const handleUpdateToys = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const detailsDescription = form.detailsDescription.value;

        const updataToy = {price, availableQuantity, detailsDescription}
        console.log(updataToy);

        fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updataToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('updated')
            }
        })

    }
    return (
        <div className="w-1/2  bg-[#1e4a41] my-12 rounded-lg mx-auto px-4 py-8">
            <h1 className="text-3xl text-white font-bold mb-4 text-center">Update Toys</h1>
            <form onSubmit={handleUpdateToys} className='font-bold'>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="number"
                        name='price'
                        defaultValue={price}
                        placeholder='Price' 
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
                        defaultValue={availableQuantity}
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
                        defaultValue={detailsDescription}
                    />
                </div>
                <button className="btn btn-outline btn-accent">Update Toys</button>
            </form>
        </div>
    );
};

export default UpdateToys;