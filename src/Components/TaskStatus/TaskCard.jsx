import React from 'react';

const TaskCard = ({task}) => {
    return (
        <div className='bg-gray-100 font-light text-xm rounded-lg shadow-sm my-5 p-5 hover:shadow-md transition duration-300 cursor-pointer'>
            <h1>{task.title}</h1>
        </div>
    );
};

export default TaskCard;