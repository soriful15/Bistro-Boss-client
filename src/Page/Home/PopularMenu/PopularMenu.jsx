// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
const [menu]=useMenu();
const popular=menu.filter(item=>item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch(`menu.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <>
            <section className='mb-12'>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-10'>

                    {
                        // menu.map(item => <MenuItem
                        popular.map(item => <MenuItem
                            key={item._id}
                            item={item}

                        ></MenuItem>)
                    }

                </div>

               <div className='text-center'>
               <button className='btn btn-outline  border-0 border-b-4 mt-4'>View full Menu</button>
               </div>
            </section>
        </>
    );
};

export default PopularMenu;