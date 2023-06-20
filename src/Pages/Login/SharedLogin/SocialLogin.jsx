import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const { googleLogIn, githubLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogIn()
            .then((result) => {
                navigate(from, { replace: true })
                toast.success('Successfully Logged In');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                navigate(from, { replace: true })
                toast.success('Successfully Logged In');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <div className='flex flex-col justify-center items-center px-8  sm:w-96 mx-auto md:w-full lg:w-96'>
            <button onClick={handleGoogleLogin} className='mt-2 w-100 flex items-center text-white bg-sky-500 hover:bg-white hover:text-sky-500 border hover:border-sky-500 rounded-md py-2 px-4 w-full justify-center ease-in-out duration-300'><FaGoogle className='lg:mr-4 sm:mr-4 mr-2 md:mr-2 md:text-xl text-lg'></FaGoogle> <span className='font-semibold md:text-lg'>Continue With Google</span></button>
            <button onClick={handleGithubLogin} className='mt-3 w-100 flex items-center text-white bg-gray-600 hover:bg-white hover:text-gray-600 border hover:border-gray-600 rounded-md py-2 px-4 w-full justify-center ease-in-out duration-300'><FaGithub className='lg:mr-4 sm:mr-4 mr-2 md:mr-2 md:text-xl text-lg '></FaGithub> <span className='font-semibold md:text-lg'>Continue With Github</span></button>
        </div>
    );
};

export default SocialLogin;