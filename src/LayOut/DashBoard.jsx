import React from 'react';
import { NavLink , Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaBars, FaShoppingBag } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';
const DashBoard = () => {
    const [cart]=useCart()
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><NavLink  to='/dashboard/home'><FaHome></FaHome> Home</NavLink ></li>
                        <li><NavLink  to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink ></li>
                        <li><NavLink to='/dashboard/history' ><FaWallet></FaWallet> Payment</NavLink ></li>
                        <li>
                            
                            
                            <NavLink  to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart
                            <span className="badge badge-secondary">{cart?.length || 0}</span>
                            </NavLink >
                            
                            
                            </li>
                        <div className="divider"></div>
                        <li><NavLink  to='/'><FaHome></FaHome> Home</NavLink ></li>
                        <li><NavLink  to='/menu'><FaBars></FaBars> Our Menu</NavLink ></li>
                        <li><NavLink  to='/order/salad'><FaShoppingBag></FaShoppingBag> Order shop</NavLink ></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;