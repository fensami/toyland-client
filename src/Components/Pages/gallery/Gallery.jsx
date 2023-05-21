import React from 'react';

const Gallery = ({gallery}) => {
    const {image} = gallery;
    return (
        <div className='container border-emerald-700 mx-auto mb-5'>
            <img className='w-52 h-36' src={image} alt="" />
        </div>
    );
};

export default Gallery;