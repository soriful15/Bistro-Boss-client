import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <section>
                <Banner></Banner>

            </section>
            <section>
                <Category></Category>
            </section>
            <section>
                <PopularMenu></PopularMenu>
            </section>
            <section>
                <Featured></Featured>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;