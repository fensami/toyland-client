import React from 'react';

const Gallery = ({gallery}) => {
    const {image} = gallery
    console.log(gallery);
    return (
        <div className='container border-emerald-700 mx-auto mb-5'>
            <img className='w-52 h-36' src={image} alt="" />
            {/* <h2>gallery: {gallery.length}</h2> */}
        </div>
    );
};

export default Gallery;