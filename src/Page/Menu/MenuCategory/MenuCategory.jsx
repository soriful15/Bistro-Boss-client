import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <>
             <div className='pt-8'>

             {title && <Cover img={img} title={title}
                    details={'WOULD YOU TO LIKE TO TRY A DISH'}
                ></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }
            </div>
<div className='text-center'>
<Link to={`/order/${title}`}>
<button className='btn btn-outline  border-0 border-b-4 mt-4'>ORDER YOUR FAVOURITE FOOD</button>
</Link>
</div>

             </div>
        </>
    );
};

export default MenuCategory;