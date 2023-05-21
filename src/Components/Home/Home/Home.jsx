import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../../Pages/gallery/Gallery';
// import Tabs from '../Tabs/Tabs';
import TabsItems from '../tabs/TabsItems';
import CowKidsToys from '../CowKidsToys/CowKidsToys';

import Aos from '../Aos/Aos'

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
                        {/* <Aos></Aos> */}

            <h1 className='text-center font-bold text-5xl text-[#38776a] my-10'>Toyland Animals</h1>
                <div className='w-1/2 mx-auto grid grid-cols-1  lg:grid-cols-3'>

                
                {
                    gallerys.map((gallery, index) => <Gallery
                    key={index}
                    gallery={gallery}
                    ></Gallery> )
                }
            
                </div>
                {/* <Gallery></Gallery> */}

                {/* <Aos></Aos> */}


                <TabsItems></TabsItems>
                <CowKidsToys></CowKidsToys>
                <Aos></Aos>
        

            
        </div>
    );
};

export default Home;