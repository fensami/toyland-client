import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../../Pages/gallery/Gallery';
// import Tabs from '../Tabs/Tabs';
import TabsItems from '../tabs/TabsItems';

const Home = () => {
    const [gallerys, setGallerys] = useState([]);

    useEffect(() => {
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => {
            setGallerys(data);
        })
    },[]) 
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center font-bold text-5xl text-[#38776a] my-10'>Toyland Animals</h1>

                <div className='grid lg:grid-cols-4  container mx-auto'>

            
                {
                    gallerys.map((gallery, index) => <Gallery
                    key={index}
                    gallery={gallery}
                    ></Gallery> )
                }
            
                </div>

                <TabsItems></TabsItems>
        

            
        </div>
    );
};

export default Home;