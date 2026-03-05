import React from 'react';

const ResolvedCard = ({task}) => {
    return (
        <div className='border-l-4 border-green-500 bg-green-100 font-light mb-5 rounded-lg shadow-sm space-y-4 p-3'>
            <h1 className='text-xl font-bold text-green-500'>{task.title}</h1>
        </div>
    );
};

export default ResolvedCard;