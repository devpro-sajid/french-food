import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaBookmark, FaHeart, FaRegStar, FaShareAlt, FaStar, FaStoreAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
    const [favourite,setfavourite]=useState([]);
    const { id,recipe_name, recipe_picture, rating, ingredients, cooking_method } = recipe;
    const handleFavourite=(id)=>{
        setfavourite(id);
        toast.success('❤️ Added To Favourite!');
    }
    return (
        <div className='p-6 md:flex justify-between items-center rounded-lg border border-gray-200 my-8 bg-white drop-shadow-sm'>
            <div className='md:w-5/12 lg:w-4/12'>
                <img className='rounded-lg w-full md:w-auto' src={recipe_picture} alt="" />
            </div>
            <div className='md:w-7/12 lg:w-8/12 md:pl-6 lg:pl-8 pt-4 md:pt-0'>
                <div className='flex justify-between md:items-center'>
                    <h2 className='lg:text-3xl text-xl font-bold text-amber-500'>{recipe_name}</h2>
                    <div className='flex md:space-x-3 space-x-2 md:mt-0 mt-2 md:p-0 pl-3'>
                        <FaShareAlt className='text-amber-400 text-lg md:text-xl'></FaShareAlt>
                        <FaBookmark className='text-amber-400 text-lg md:text-xl'></FaBookmark>
                    </div>
                </div>
                <div className='md:flex md:space-x-10 py-3'>

                    <div>
                        <h4 className='font-bold lg:text-xl pb-2'>Ingredients:</h4>
                        <ul className='list-disc pl-5'>
                            {ingredients?.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold lg:text-xl pb-2 md:mt-0 mt-5'>Cooking Method:</h4>
                        <ul className='list-decimal pl-5'>
                            {cooking_method?.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between space-x-2 items-center'>
                    <div className='flex space-x-1'>
                    <Rating className='text-xl text-amber-500'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                        readonly
                    /><span>{'('+ rating + ')'}</span>
                    </div>
                    <div>
                        <button onClick={()=>handleFavourite(id)} title='Favourite Item' className='sm:block hidden bg-amber-500 lg:px-6 px-3 py-2 text-white font-semibold rounded-sm hover:bg-white hover:border-amber-400 hover:text-amber-500 border ease-in-out duration-300' disabled={favourite==id}><span className='flex items-center'>Add To Favourite<FaHeart className='ml-2'></FaHeart></span></button>
                        <button onClick={()=>handleFavourite(id)} title='Favourite Item' disabled={favourite==id} className='text-xl sm:hidden block font-semibold text-amber-500 hover:text-black ease-in-out duration-300'><FaHeart></FaHeart></button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default RecipeCard;