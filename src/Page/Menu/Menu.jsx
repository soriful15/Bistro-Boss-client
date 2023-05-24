import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category === 'dessert')
    const soup=menu.filter(item=>item.category === 'soup')
    const salad=menu.filter(item=>item.category === 'salad')
    const pizza=menu.filter(item=>item.category === 'pizza')
    const offered=menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'}
                details={'WOULD YOU TO LIKE TO TRY A DISH'}
            ></Cover>
    <SectionTitle
    subHeading={"Don't miss"}
    heading={"TODAY'S OFFER"}
    ></SectionTitle>
    <MenuCategory items={offered}></MenuCategory>

<MenuCategory
items={dessert}
title={"Dessert"}
img={dessertImg}
></MenuCategory>


<MenuCategory
items={pizza}
title={"pizza"}
img={pizzaImg}

></MenuCategory>
<MenuCategory
items={soup}
title={"soup"}
img={soupImg}

></MenuCategory>


<MenuCategory
items={salad}
title={"salad"}
img={saladImg}

></MenuCategory>


        </div>
    );
};

export default Menu;