import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsItems.css'
import HouseTabs from './houseTabs/HouseTabs';
import LionTabs from './lionTabs/LionTabs';
import BirdsTabs from './birdsTabs/BirdsTabs';

const TabsItems = () => {

  const [hourses, setHourses] = useState([])
  const [lions, setLions] = useState([])
  const [birds, setBirds] = useState([])

  //hourse
  useEffect(() => {
    fetch('hourse.json')
      .then(res => res.json())
      .then(data => {
        setHourses(data);
      })
  }, [])

  //lions
  useEffect(() => {
    fetch('lion.json')
      .then(res => res.json())
      .then(data => {
        setLions(data);
      })
  }, [])

  //birds
  useEffect(() => {
    fetch('bird.json')
      .then(res => res.json())
      .then(data => {
        setBirds(data);
      })
  }, [])
  return (
    <div className='border font-bold '>
      <Tabs>
        <div className='lg:w-96 mt-2 mx-auto'>
          <TabList >
            <Tab>Houses Toys</Tab>
            <Tab>Lions Toys</Tab>
            <Tab>Birds Toys</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-green-400 lg:py-12'>
            {
              hourses.map((hourse, index) => <HouseTabs
                key={index}
                hourse={hourse}

              ></HouseTabs>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid lg:grid-cols-2 grid-cols-1 bg-green-400 lg:py-12'>
            {
              lions.map((lion, index) => <LionTabs
                key={index}
                lion={lion}

              ></LionTabs>)
            }
          </div>
        </TabPanel>

        <TabPanel>

          <div className='grid lg:grid-cols-2 grid-cols-1 bg-green-400 lg:py-12'>
            {
              birds.map((bird, index) => <BirdsTabs
                key={index}
                bird={bird}

              ></BirdsTabs>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsItems;