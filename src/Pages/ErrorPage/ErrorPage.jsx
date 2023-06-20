import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Header from '../../Components/Shared/Header'
import Footer from '../../Components/Shared/Footer'


const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <>
    <Header></Header>
    <section className='flex items-center h-screen md:p-16 px-6 py-16 bg-gray-100 text-gray-900'>
      <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:flex items-center justify-between my-8 '>
        <div className='text-left md:pr-5'>
        <img src="https://i.ibb.co/9gSMMR6/computer-repair-illustration-1284-64458-removebg-preview.png" alt="" />
        </div>
        <div className='text-center'>
          <h2 className='mb-8 font-extrabold text-5xl md:text-8xl text-gray-600'>
            <span className='sr-only'>Error</span> {status+'!!!' || '404!!!'}
          </h2>
          <p className='text-xl font-semibold md:text-3xl mb-8 bg-red-500 px-6 py-2 rounded-md text-white'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-amber-500 text-gray-900'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
   <Footer></Footer>
    </>
  )
}

export default ErrorPage