import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item
    return (
        <>

            <div className="card w-96 bg-base-100 shadow-xl relative">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 bg-slate-900 text-white  mr-4 mt-4 px-4 py-2'>{price}</p>
                <div className="card-body text-center flex justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions flex items-center justify-center">
                        <button className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4">Add to Card</button>
                    </div>
                </div>
            </div>



        </>
    );
};

export default FoodCard;