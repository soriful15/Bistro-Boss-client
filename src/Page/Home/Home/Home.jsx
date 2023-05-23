import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
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
        </div>
    );
};

export default Home;