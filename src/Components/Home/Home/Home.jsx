import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Gallery from '../../Pages/gallery/Gallery';
import TabsItems from '../tabs/TabsItems';
import CowKidsToys from '../CowKidsToys/CowKidsToys';

import Aos from '../Aos/Aos'
import useTitle from '../../../Hooks/useTitles';

const Home = () => {
    useTitle('home')
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

            <h1 className='text-center font-bold lg:text-5xl text-[#38776a] my-10'>Toyland Animals</h1>
                <div className='lg:w-1/2 w-2/3 mx-auto grid grid-cols-1  lg:grid-cols-3'>

                
                {
                    gallerys.map((gallery, index) => <Gallery
                    key={index}
                    gallery={gallery}
                    ></Gallery> )
                }
            
                </div>


                <TabsItems></TabsItems>
                <div>
                <CowKidsToys></CowKidsToys>
                </div>
                <Aos></Aos>
        

            
        </div>
    );
};

export default Home;