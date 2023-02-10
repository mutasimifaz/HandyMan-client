// import React from 'react';

// const Newsletter = () => {
//     return (
//         <div>
//             <section className="py-20 2xl:py-40 bg-white">
//                 <div className="container px-4 mx-auto">
//                     <div className="max-w-5xl mx-auto">
//                         <div className="relative pt-16 px-6 lg:px-24 pb-20 bg-gray-600 rounded-3xl overflow-hidden">
//                             {/* <img className="absolute top-0 left-0" src="zospace-assets/lines/blue-half-circle.svg" alt="" /> */}
//                             <img className="hidden lg:block absolute top-0 right-0 mt-6 mr-12" src="https://svgsilh.com/svg/153302.svg" alt="" />
//                             {/* <img className="hidden lg:block absolute top-0 right-0 w-96 h-96 -mt-14 -mr-14" src="zospace-assets/lines/circle.svg" alt="" /> */}
//                             <div className="relative">
//                                 <span className="text-base lg:text-lg text-white font-bold">More news</span>
//                                 <h3 className="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">Subscribe now</h3>
//                                 <div className="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
//                                     <span className="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10">
//                                         <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fillOpacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fillOpacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
//                                     </span>
//                                     <input className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email" />
//                                     <button className="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Newsletter;
import React from 'react';

const Newsletter = () => {
    return (
        <div style={{fontFamily:'Poppins,sans-serif'}} className='h-screen relative bg-gradient-to-br from-indigo-700 to-purple-500 overflow-hidden lg:block hidden'>
            <div style={{height:'1500px',width:'1500px',left:'-750px',top:'-250px'}} className='absolute bg-gradient-to-br h-full rounded-full bg-white/30 blur-2xl'>
            <div style={{height:'1000px',width:'1000px',left:'-500px',top:'-500px'}} className='absolute bg-gradient-to-br h-full rounded-full bg-white/30 blur-2xl'></div>
            </div>
            <div className="absolute w-96 h-96 backdrop-blur-sm bg-white/30 rounded-full z-9 top-1/2 right-1/2"></div>
            <div className="absolute w-72 h-72 backdrop-blur-sm bg-white/30 rounded-full z-9 bottom-1/2 right-1/2"></div>
            <div className="absolute w-16 h-16 backdrop-blur-sm bg-white/30 rounded-full z-9 inset-y-2/4 inset-x-3/4"></div>
            <div className='absolute top-0 w-full h-screen backdrop-blur-sm bg-gradient-to-br to-purple-500/30 from-indigo-700/40'></div>
            <div className='w-11 md:w-3/6 2xl:w-2/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/30 rounded-lg md:p-20 p-10'>
                <div className='mb-3 flex items-center justify-center'>
            <i className="fa-thin fa-envelope-open-text text-white text-2xl text-center"></i>

                </div>
            <h1 className='text-white font-semibold lg:text-3xl text-xl mb-2'>Subscribe for the best deals</h1>
            <p className="text-white text-xl mb-5 w-3/4">
                Get the best deals with your subscription
            </p>
            <form action="#" method='GET' className='flex items-center relative'>
                <input type="email" placeholder='Enter your email...' className='placeholder:text-gray-300 text-white focus:border-purple-500 active form-input px-4 py-3 rounded' />
                <button className='font-semibold rounded-md px-5 absolute right-0 h-full text-white bg-gradient-to-br to-purple-500 from-indigo-700'>
                    Subscribe
                </button>
            </form>
            </div>
        </div>
    );
};

export default Newsletter;