import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import NavBar from '../Page/Shared/NavBar/NavBar';

const Main = () => {
const location =useLocation();
// console.log(location)
// const noHeaderFooter=location.pathname.includes('login')
// const noHeaderFooterSing=location.pathname.includes('register')
const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register')


    return (
        <div>
           {/* {noHeaderFooterSing || noHeaderFooter || <NavBar></NavBar>} */}
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {/* { noHeaderFooterSing || noHeaderFooter || <Footer></Footer>} */}
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;