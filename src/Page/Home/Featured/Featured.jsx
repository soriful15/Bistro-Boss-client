import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <>
            <div className='featured-item mb-10 text-white pt-3 my-20 bg-fixed'>


                <SectionTitle
                    subHeading="Check it out"
                    heading="Featured Item"
                ></SectionTitle>
                <div className=' md:flex justify-center items-center pb-20 pt-12 px-36  bg-slate-500 bg-opacity-60'>
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>March 20, 2023</p>
                        <p className='uppercase'>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum neque iusto sit facilis quidem quaerat excepturi quae ad quam doloremque fuga, dignissimos, aliquam laborum incidunt temporibus velit molestias dolorem. Ratione delectus velit dolorum. Hic magnam in tempora ea similique eligendi tenetur fuga repudiandae voluptates unde, exercitationem itaque nemo nulla.</p>
                        <button className='btn btn-outline  border-0 border-b-4 mt-4'>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Featured;