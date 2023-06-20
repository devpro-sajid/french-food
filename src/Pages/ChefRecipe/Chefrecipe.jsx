import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBehanceSquare, FaCalendar, FaCalendarAlt, FaDribbbleSquare, FaFacebook, FaInstagram, FaLinkedin, FaRegThumbsUp, FaThumbsUp, FaTwitter, FaTwitterSquare } from 'react-icons/fa'
import { RiRestaurantFill } from "react-icons/ri";
import RecipeCard from './ChefCards/RecipeCard';
const Chefrecipe = () => {
    const chef = useLoaderData();
    const { id, name, picture, bio, years_of_experience, num_recipes, num_likes, recipes_list } = chef;
    return (
        <>
            <div className=''>
                <img className='w-full lg:block hidden' src="https://i.ibb.co/GPfj3Kc/chef-profilebg.jpg" alt="" />
                <img className='w-full lg:hidden hidden sm:block' src="https://i.ibb.co/VH3GVBS/tablet-chef.jpg" alt="" />
                <img className='w-full sm:hidden block' src="https://i.ibb.co/khgNTMf/mobile-chef.jpg" alt="" />
            </div>
            <div className='px-5 sm:px-0 md:px-10 lg:px-12 -mt-48 md:-mt-40'>
                <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white drop-shadow-lg rounded-md'>
                    <div className='md:flex items-center'>
                        <div className='md:w-5/12 w-full md:block flex justify-center'> <img className='w-auto  md:drop-shadow-md' src={picture} alt="" /></div>
                        <div className='md:pl-16 lg:pl-0 lg:py-0 md:py-8 py-6 md:pr-6 px-6 md:w-7/12 w-full'>
                            <button className='bg-amber-500 px-6 text-white rounded-sm font-semibold mb-3'>CHEF PROFILE</button>
                            <h2 className='lg:text-2xl text-xl'><strong>Name:</strong> <span className='font-semibold'>{name}</span></h2>
                            <h2 className='lg:text-2xl text-xl py-2'><strong>Bio:</strong> <span className='lg:text-lg text-sm'>{bio}</span></h2>

                            <div className='lg:flex items-center lg:space-x-5 pt-3'>
                                <div className='flex space-x-2 items-center mb-2'>
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <p><strong>Experience:</strong> {years_of_experience} Years</p>
                                </div>
                                <div className='flex space-x-2 items-center mb-2'>
                                    <RiRestaurantFill></RiRestaurantFill>
                                    <p><strong>Recipes:</strong> {num_recipes}</p>
                                </div>
                                <div className='flex space-x-2 items-center mb-2'>
                                    <FaRegThumbsUp></FaRegThumbsUp>
                                    <p><strong>Total:</strong> {num_likes} Likes</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='bg-amber-500 md:py-6 py-4 px-6 rounded-b-md drop-shadow-md flex justify-center md:space-x-12 space-x-4 items-center'>
                        <FaFacebook className='md:text-3xl text-2xl text-white'></FaFacebook>
                        <FaInstagram className='md:text-3xl text-2xl text-white'></FaInstagram>
                        <FaTwitterSquare className='md:text-3xl text-2xl text-white'></FaTwitterSquare>
                        <FaLinkedin className='md:text-3xl text-2xl text-white'></FaLinkedin>
                        <FaBehanceSquare className='md:text-3xl text-2xl text-white'></FaBehanceSquare>
                        <FaDribbbleSquare className='md:text-3xl text-2xl text-white'></FaDribbbleSquare>
                    </div>
                </div>
            </div>

            {/* Recipes Section */}
            <div className='boxed-container'>
            <div className='flex justify-center '>
                <img src="https://i.ibb.co/5cF4Cyk/cheficon.png" alt="" />
            </div>
            <div className='text-center mb-14'>
                <h2 className='chef-title py-3'>Chef Recipes</h2>
                <p className='text-lg'>Explore some delicious dishes from this chef</p>
            </div>
            {/* Recipe Cards*/}
            {recipes_list?.map((recipe)=><RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)}
            </div>

        </>
    );
};

export default Chefrecipe;