import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>

            </section>
            <section>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;