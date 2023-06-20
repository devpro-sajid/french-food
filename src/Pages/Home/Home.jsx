import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ChefCards from '../ChefRecipe/ChefCards/ChefCards';
import Loading from '../../Utils/Loading';
import RecipeCard from '../ChefRecipe/ChefCards/RecipeCard';

const Home = () => {
    const { chefs } = useContext(AuthContext);
    const [chef, setPopChef] = useState([])
    useEffect(() => {
        fetch('https://french-food-server-devpro-sajid.vercel.app/chef/3')
            .then(res => res.json())
            .then(data => setPopChef(data))


    }, [chefs])
    return (
        <section>
            <div className='bg-amber-50 pb-16 pt-12'>
                <div className='boxed-container sm:flex items-center justify-between pb-24 text-center  text-gray-900'>
                    <div className='text-left sm:w-6/12 w-full pb-12 sm:pb-0'>
                        <h2 className='md:text-5xl text-3xl font-semibold'>An Authentic  <span className='text-amber-500'>French Food</span> Journey To Explore</h2>
                        <p className='md:py-8 py-5 text-lg'>A creative space to explore French gastronomy in an environment designed to facilitate the best of what excellent ingredients could offer.</p>
                        <a href="#chef-section">
                            <button className='text-white bg-amber-500 px-5 py-3 font-semibold rounded-md'>Explore Chefs</button>
                        </a>
                    </div>
                    <div className='sm:w-6/12 w-full flex md:justify-end  sm:text-right text-center'>
                        <img className='rounded-md hidden sm:block w-fluid' src="https://i.ibb.co/H4kyksj/chef-banner.png" alt="" />
                        <img className='rounded-md sm:hidden w-fluid' src="https://i.ibb.co/PgdtSm2/chef5.png" alt="" />
                    </div>
                </div>
            </div>
            {/* Chef section */}
            <section id="chef-section" className='boxed-container'>
                <div className='flex justify-center'>
                    <img src="https://i.ibb.co/5cF4Cyk/cheficon.png" alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='chef-title py-3'>Meet Our Chefs</h2>
                    <p className='text-lg'>The most delicious dishes from the freshest of ingredients made by them</p>
                </div>
                {/* chef card */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>
                    {
                        chefs && chefs?.map(chef => <ChefCards key={chef.id} chef={chef}></ChefCards>)
                    }
                </div>
            </section>
            {/* popular Recipe */}
            <section id="chef-section" className='boxed-container'>
                <div className='flex justify-center'>
                    <img src="https://i.ibb.co/5cF4Cyk/cheficon.png" alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='chef-title py-3'>Our Popular Recipes</h2>
                    <p className='text-lg'>The most delicious dishes that liked by valuable customer</p>
                </div>
                {/* chef card */}
                <div>
                    {chef?.recipes_list?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)}
                </div>

            </section>
            {/* Testimonial */}
            <section id="chef-section" className='boxed-container -mt-12'>
                <div className='flex justify-center'>
                    <img src="https://i.ibb.co/5cF4Cyk/cheficon.png" alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='chef-title py-3'>Testimonials</h2>
                    <p className='text-lg'>Valuable Reviews of our customers</p>
                </div>
                {/* chef card */}
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-10'>
                    <div className='border border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6 '>
                        <img src="https://i.ibb.co/CMqLXZS/Screenshot-5-4-2023-at-04-17-PM.png" alt="" />
                        <p className='py-5'>The very first recipe I looked for was the BEST Crème Brûlée EVER and sure enough there it was!  Hoping to continue my luck I searched for the Magret de Canard Recipe I enjoy so much as a lunch special, yup! Now I can make it at home!</p>
                        <h4 className='text-xl font-semibold'>Pam Osborne</h4>
                        <p className='text-sm'>Paris, France</p>
                    </div>

                    <div className='border border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6 my-6 md:my-0'>
                        <img src="https://i.ibb.co/CMqLXZS/Screenshot-5-4-2023-at-04-17-PM.png" alt="" />
                        <p className='py-5'>I always enjoy a bran muffin with my coffee and newspaper in the morning. And you see me three or four times a week for lunch! I really love your quiche and your Alaskan halibut and chips are so wonderful. I have never had better fish anywhere.</p>
                        <h4 className='text-xl font-semibold'>Charlotte Flair</h4>
                        <p className='text-sm'>Marseille, France</p>
                    </div>

                    <div className='border border-gray-100 hover:shadow-lg md:p-6 lg:p-8 p-6'>
                        <img src="https://i.ibb.co/CMqLXZS/Screenshot-5-4-2023-at-04-17-PM.png" alt="" />
                        <p className='py-5'>Last night I tried your French salad and made a batch of your bran muffins and talk about perfection! Can't count the number of bran muffin recipes I have tried over the years, none of them that exciting. Until now,5 star</p>
                        <h4 className='text-xl font-semibold'>Jeff hardy</h4>
                        <p className='text-sm'>Strasbourg, france</p>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Home;