import React, { useContext, useState } from 'react';
import SocialLogin from './SharedLogin/SocialLogin';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const {user,createUser,updateUser,logOut}=useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            setError('Password must be 6 characters,at least one uppercase letter, one lowercase letter, one number and one special character')
            form.reset()
            return;
        }
        else{
            createUser(email,password)
            .then(result=>{
                toast.success('Registration Successful');
                setError('');
                updateUser(userName,photoUrl)
                .then(() => {
                    logOut();
                  }).catch((error) => {
                    toast.error(error.message);
                  });
                navigate("/login")
            })
            .catch(error=>{
                setError(error.message);
            })
        }
        form.reset()
    }
    return (

        <div className='boxed-container mb-20'>
            <div style={{ borderRadius: '20px' }} className='md:flex drop-shadow-lg mx-auto bg-white'>
                <div className='py-12 px-5 bg-amber-50 md:w-6/12 md:rounded-l-[20px] rounded-t-[20px] md:rounded-r-[0px] flex items-center'>
                    <img src="https://i.ibb.co/m9sbxTh/signup-removebg-preview.png" alt="" />
                </div>

                <div className=' md:w-6/12 py-5 lg:pb-12'>
                    <form onSubmit={handleRegister} className="bg-white rounded px-8 pt-6 pb-6 sm:w-96 mx-auto md:w-full lg:w-96">
                        <h2 className='text-2xl font-bold  text-center mb-8'>Register Here</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-name">
                                Name
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline" name="name" id="reg-name" type="text" placeholder="Your Name" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Photo-url">
                                Photo URL
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline" name="photo" id="photo-url" type="text" placeholder="photo url" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-address">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline" name="email" id="email-address" type="email" placeholder="Email Address" required />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline mb-2" id="password" type="password" placeholder="Password" required />
                        </div>
                        <div>
                            <p className={error ? "text-red-500 text-sm block" : "hidden"}>{error}</p>
                            <button className="bg-amber-500 mt-2 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                Sign Up
                            </button>

                        </div>
                    </form>
                    <p className='text-center mb-3'>Or</p>
                    <SocialLogin></SocialLogin>
                    <p className="text-sm text-center pt-3">Already Have An Account? <span className='text-amber-500'><Link to='/login'>Login</Link></span></p>
                </div>

            </div>
        </div>
    )
};

export default Register;