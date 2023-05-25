import React, { useState } from 'react';
import coverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../Page/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
const categories=['salad', 'pizza','soup','dessert','drinks']
const {category} = useParams();
const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]=useMenu();

    // const {category} = useParams()
    // console.log(category)

    const dessert=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const drinks=menu.filter(item=>item.category === 'drinks')
    return (
        <>
         <Helmet>
  <title>Bistro Boss | order shop</title> 
</Helmet>
            <Cover
            img={coverImg}
            title={"OUR SHOP"}
            details={"WOULD YOU LIKE TO DRY DISH"}
            ></Cover>

<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-10 text-center'>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
      <OrderTab items={salad}></OrderTab>
        </TabPanel>


      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>


      <TabPanel>
      <OrderTab items={soup}></OrderTab>
      </TabPanel>


      <TabPanel>
      <OrderTab items={dessert}></OrderTab>
      </TabPanel>


      <TabPanel>
      <OrderTab items={drinks}></OrderTab>
      </TabPanel>
    </Tabs>



        </>
    );
};

export default Order;