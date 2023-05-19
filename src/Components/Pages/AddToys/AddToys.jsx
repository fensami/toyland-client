import React from 'react';

const AddToys = () => {
    return (
        <div className="w-1/2  bg-[#1e4a41] my-12 rounded-lg mx-auto px-4 py-8">
      <h1 className="text-3xl text-white font-bold mb-4 text-center">Add A Toy</h1>
      <form  className='font-bold'>
        <div className=" mb-4">
          <label className="block mb-2 text-white" htmlFor="pictureUrl">
            Picture URL
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3"
            type="text"
            placeholder='Picture Url'
            onChange={(event) => setPictureUrl(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3"
            type="text"
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
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
            // value={sellerName}
            onChange={(event) => setSellerName(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="sellerEmail">
            Seller Email
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3"
            type="email"
            placeholder='Seller Email'
            onChange={(event) => setSellerEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="subCategory">
            Sub-category
          </label>
          <select
            id="subCategory"
            className="w-full border rounded py-2 px-3"
            // value={subCategory}
            onChange={(event) => setSubCategory(event.target.value)}
          >
           <>
           <option  value="">Select a sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
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
            placeholder='Price'
            // value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="rating">
            Rating
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3"
            type="number"
            placeholder='Rating'
            onChange={(event) => setRating(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3"
            type="number"
            placeholder='Available Quantity'
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="description">
            Detail Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded py-2 px-3"
            placeholder='Details Description' 
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <button className="btn btn-outline btn-accent">Add Toys</button>

      </form>
    </div>
    );
};

export default AddToys;