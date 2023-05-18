import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsItems.css'
import HouseTabs from './houseTabs/HouseTabs';
import LionTabs from './lionTabs/LionTabs';
import BirdsTabs from './birdsTabs/BirdsTabs';

const TabsItems = () => {
    return (
        <div className='border font-bold'>
      <h2>Shop by Category</h2>
      <Tabs>
        <TabList>
          <Tab>Houses Toys</Tab>
          <Tab>Lions Toys</Tab>
          <Tab>Birds Toys</Tab>
        </TabList>

        <TabPanel>
          <HouseTabs></HouseTabs>
        </TabPanel>

        <TabPanel>
           <LionTabs></LionTabs>
        </TabPanel>

        <TabPanel>
          <BirdsTabs></BirdsTabs>
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default TabsItems;