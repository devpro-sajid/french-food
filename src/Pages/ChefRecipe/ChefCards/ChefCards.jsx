import React from 'react';
import { RiCalendar2Line, RiRestaurantFill, RiThumbUpFill } from "react-icons/ri";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
const ChefCards = ({ chef }) => {
    const { id, name, picture, years_of_experience, num_recipes, num_likes } = chef;
    const width='100%';
    const height= '384px';
    
    return (
        <div className='text-center drop-shadow-2xl bg-white rounded-md hover:drop-shadow-sm transition ease-in-out delay-150'>
            <LazyLoad height={height} width={width} threshold={0.95} ><img className='w-full h-96 rounded-t-md' src={picture} alt="" /></LazyLoad>
            <h2 className='text-xl font-bold pt-3'>{name}</h2>
            <p className='text-lg'>Master Chef</p>

            <div className='border-y grid grid-cols-3 border-gray-200 mt-3 py-2 px-4'>

                <div className='flex items-center'>
                    <RiCalendar2Line></RiCalendar2Line>
                    <p className='ml-2 text-xs md:text-sm'>{years_of_experience} Years</p>
                </div>
                <div className='border-x border-gray-200 flex items-center justify-center'>
                    <RiRestaurantFill></RiRestaurantFill>
                    <p className='ml-2 text-xs md:text-sm'>{num_recipes} Recipes</p>
                </div>
                <div className='flex items-center justify-end'>
                    <RiThumbUpFill></RiThumbUpFill>
                    <p className='ml-2 text-xs md:text-sm'>{num_likes} Likes</p>
                </div>

            </div>
            <Link to={`/chef-recipes/${id}`}><button className='w-full bg-amber-500 py-2 rounded-b-md text-white font-semibold text-lg'>View Recipes</button></Link>
        </div>
    );
};

export default ChefCards;