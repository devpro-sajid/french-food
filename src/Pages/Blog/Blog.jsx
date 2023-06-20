import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa'
const Blog = () => {
    const [showAll, setShowAll] = useState(0);
    const [loading,setLoading]=useState(false);
    const handleDownloadPDF = ()=>{
        const capture=document.getElementById('download-pdf');
        setLoading(true);
       html2canvas(capture).then(canvas=>{
        const imgData=canvas.toDataURL("img/png");
        const doc=new jsPDF('p','mm','a4');
        const componentWidth=doc.internal.pageSize.getWidth();
        const componentHeight=doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth,componentHeight);
        setLoading(false);
        doc.save("blog.pdf");
    })
    }
    return (
        <>
            <div className='py-32 bg-amber-50'>
                <h2 className='text-3xl font-bold text-center'>Blog</h2>
            </div>
            <div id='download-pdf' className='grid boxed-container md:grid-cols-2 gap-8'>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full rounded-md' src="https://i.ibb.co/pdm1z0f/blog-sheet-4-51-500x285.png" alt="" />
                    <h2 className='sm:text-3xl text-xl font-bold pt-5'>Differences between uncontrolled and controlled components</h2>
                    <p className='sm:text-xl text-lg py-4'>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.

                        A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component....<span onClick={() => { setShowAll(1) }} className={showAll === 1 ? 'hidden' : 'text-amber-500'}>Read More</span><span className={showAll === 1 ? '' : 'hidden'}>When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</span></p>
                    <div className='flex sm:justify-start justify-center items-end'>
                        <Link to='/blog'><button className='bg-amber-500 px-10 py-2 rounded-md text-white font-semibold mr-4  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full rounded-md' src="https://i.ibb.co/k6P0mpV/download-500x285.png" alt="" />
                    <h2 className='sm:text-3xl text-xl font-bold pt-5'>How to validate React props using PropTypes?</h2>
                    <p className='sm:text-xl text-lg py-4'>Prior to React v15.5.0, a utility called PropTypes was available as part of the React package, which provided a lot of validators for configuring type definitions for component props. You could access it with React.PropTypes.However, in later versions of React, this utility has been moved to a separate package called prop-types. To get access to the PropTypes utility, you need to add prop-types as a dependency for your project...<span onClick={() => { setShowAll(2) }} className={showAll === 2 ? 'hidden' : 'text-amber-500'}>Read More</span><span className={showAll === 2 ? '' : 'hidden'}>The PropTypes utility exports a wide range of validators for configuring type definitions.Some propType validators:-
                        PropTypes.any: The prop can be of any data type,
                        PropTypes.bool: The prop should be a Boolean,
                        PropTypes.number: The prop should be a number,
                        PropTypes.string: The prop should be a string,
                        PropTypes.func: The prop should be a function,
                        PropTypes.array: The prop should be an array,
                        PropTypes.object: The prop should be an object
                        PropTypes.symbol: The prop should be a symbol.</span></p>
                    <div className='flex sm:justify-start justify-center items-end'>
                        <Link to='/blog'><button className='bg-amber-500 px-10 py-2 rounded-md text-white font-semibold mr-4  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full rounded-md' src="https://i.ibb.co/N9KnPj3/download-2-500x285.png" alt="" />
                    <h2 className='sm:text-3xl text-xl font-bold pt-5'> Difference between nodejs and express js</h2>
                    <p className='sm:text-xl text-lg py-4'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                    <div className='flex sm:justify-start justify-center items-end'>
                        <Link to='/blog'><button className='bg-amber-500 px-10 py-2 rounded-md text-white font-semibold mr-4  text-lg'>View Details</button></Link>
                    </div>
                </div>
                <div className='text-left p-8 border border-gray-200 rounded-md shadow'>
                    <img className='w-full rounded-md' src="https://i.ibb.co/WvqgRDd/images-500x285.png" alt="" />
                    <h2 className='sm:text-3xl text-xl font-bold pt-5'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='sm:text-xl text-lg py-4'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.<br />
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    <div className='flex sm:justify-start justify-center items-end'>
                        <Link to='/blog'><button className='bg-amber-500 px-10 py-2 rounded-md text-white font-semibold mr-4  text-lg'>View Details</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mb-16'>
                {loading?(<button className='bg-amber-500 text-white font-semibold py-2 px-8 flex items-center hover:bg-white hover:text-amber-500 hover:border-amber-500 border justify-center rounded-md md:text-xl text-lg ease-in-out duration-300'>Downloading...</button>):(<button onClick={handleDownloadPDF} className='bg-amber-500 text-white font-semibold py-2 px-8 flex items-center hover:bg-white hover:text-amber-500 hover:border-amber-500 border justify-center rounded-md md:text-xl text-lg ease-in-out duration-300'>Download The Blogs<FaDownload className='ml-3'></FaDownload></button>)}
            </div>
        </>
    )
}

export default Blog;