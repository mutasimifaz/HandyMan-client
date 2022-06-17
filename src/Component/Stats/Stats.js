import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
const Stats = () => {
    return (
        <div>
             
            <section className="text-center bg-white" style={{ fontFamily: 'Poppins, Cursive' }}>
            <div className='flex gap-2 justify-center items-center'>
            <h1 style={{WebkitTextStroke:'1px darkCyan', fontFamily:'Poppins, sans-serif'}} className='text-5xl font-extrabold text-white drop-shadow-sm text-center'>Stats </h1><i className="fa-light fa-chart-line-up text-5xl text-cyan-800"></i>
            </div>
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        <li className="p-8 hover:shadow-lg shadow-md">
                            {/* <i className="fas fa-star fa-spin text-gray-400 text-xl"></i> */}
                            <StarIcon className='w-5 h-5 text-gray-400 fa-spin'/>
                            <p className="text-xl font-bold text-gray-400">33k +</p>
                            <p className="mt-1 text-lg font-medium">Reviews</p>
                        </li>

                        <li className="p-8 hover:shadow-lg shadow-md">
                            {/* <i className="fal fa-users fa-bounce text-gray-400 text-xl"></i> */}
                            <GroupOutlinedIcon className='w-5 h-5 text-gray-400 fa-fade'/>
                            <p className="text-xl font-bold text-gray-400">190 +</p>
                            <p className="mt-1 text-lg font-medium">Happy clients</p>
                        </li>

                        <li className="p-8 hover:shadow-lg shadow-md">
                            {/* <i className="fal fa-money-bill-1-wave text-gray-400 fa-fade text-2xl"></i> */}
                            <PaidOutlinedIcon className='w-5 h-5 text-gray-400 fa-bounce'/>
                            <p className="text-xl font-bold text-gray-400">$150M +</p>
                            <p className="mt-1 text-lg font-medium">Annual revenue</p>
                        </li>

                        <li className="p-8 hover:shadow-lg shadow-md">
                            {/* <i className="fal fa-screwdriver-wrench text-gray-400 fa-flip text-2xl"></i> */}
                            <ConstructionIcon className='w-5 h-5 text-gray-400 fa-flip'/>
                            <p className="text-xl font-bold text-gray-400">80 +</p>
                            <p className="mt-1 text-lg font-medium">Tools</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Stats;