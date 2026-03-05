import React from 'react';

const Banner = ({selectedTask, resolvedTask}) => {
    return (
        <div>
            <div className='flex justify-between my-20 gap-10'>
            <div className='text-white text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-2/4 h-80 rounded-lg flex flex-col items-center justify-center'>
                <h2>In-Progress</h2>
                <span className='text-6xl'>{selectedTask.length}</span>
            </div>
            <div className='text-white text-2xl bg-linear-to-r from-green-400 to-green-700 w-2/4 h-80 rounded-lg flex flex-col items-center justify-center'>
            <h2>Resolved</h2>
                <span className='text-6xl'>{resolvedTask.length}</span>
            </div>
            </div>
        </div>
    );
};

export default Banner;