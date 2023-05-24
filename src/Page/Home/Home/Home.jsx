import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <div>
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