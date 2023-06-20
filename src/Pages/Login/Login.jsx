import React, { useContext, useState } from 'react';
import SocialLogin from './SharedLogin/SocialLogin';
import {toast} from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const {loginUser}=useContext(AuthContext);
    // const [forget, forgetHandle] = useState(false);
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from=location?.state?.from?.pathname ||'/';

    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        setError('');
        loginUser(email,password)
        .then((result) => {
            navigate(from,{replace:true})
            toast.success('Successfully Logged In'); 
          })
          .catch((error) => {
            
            if(error.message.includes('wrong-password')){
                toast.error('Wrong Password! Please Try Again');
                setError('Wrong Password! Please Try Again');
            }
            else{
                toast.error(error.message);
                setError(error.message); 
            }
            // ..
          });
          form.reset()
    }
    return (

        <div className='boxed-container mb-20'>
            <div style={{ borderRadius: '20px' }} className='md:flex drop-shadow-lg mx-auto bg-white'>
                <div className='py-12 px-5 bg-amber-50 md:w-6/12 md:rounded-l-[20px] rounded-t-[20px] md:rounded-r-[0px] flex items-center'>
                    <img src="https://i.ibb.co/qRMTsRF/login-removebg-preview.png" alt="" />
                </div>

                <div className=' md:w-6/12 py-5 lg:pb-12'>
                    <div>
                        <form onSubmit={handleLogin} className="bg-white rounded px-8 pt-6 pb-6 sm:w-96 mx-auto md:w-full lg:w-96">
                            <h2 className='text-2xl font-bold  text-center mb-8'>Login Here</h2>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-log">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline" name="email" id="email-log" type="email" placeholder="Email Address" required />
                        </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-log">
                                    Password
                                </label>
                                <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-400 focus:shadow-outline mb-2" id="password-log" name="password" type="password" placeholder="Password" required />
                            </div>
                            <div className=" ">
                            <a className="align-baseline font-bold text-sm text-amber-500 hover:text-amber-600 text-right block" href="#">
                                    Forgot Password?
                                </a>
                                <p className={error?'text-red-500 text-sm my-2':'hidden'}>{error}</p>
                                <button className="bg-amber-500 mt-2 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"  type="submit">
                                    Sign In
                                </button>
                                
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className='text-center mb-3'>Or</p>
                        <SocialLogin></SocialLogin>
                        <p className="text-sm text-center pt-3">Don't Have An Account? <span className='text-amber-500'><Link to='/register'>Sign Up</Link></span></p>
                    </div>

                    {/* <div className={forget?'block':'hidden'}>
                        <a onClick={() => forgetHandle(false)} className="inline-block align-baseline font-bold text-sm text-amber-500 hover:text-amber-600" href="#">
                            Return TO Login?
                        </a>
                    </div> */}

                </div>

            </div>
        </div>

    );
};

export default Login;