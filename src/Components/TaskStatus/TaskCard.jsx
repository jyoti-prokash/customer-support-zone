import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({task, resolvedTask, setResolvedTask, removedSelectedTask}) => {
    const handleComplete = (task) => {
            setResolvedTask([...resolvedTask, task]);
            toast.success('Task marked as complete!');
            removedSelectedTask(task.id)
    }
    return (
        <div className='bg-gray-100 font-light mb-5 rounded-lg shadow-sm space-y-4 p-3 hover:shadow-md transition duration-300 cursor-pointer'>
            <h1>{task.title}</h1>
            <button onClick={()=>{handleComplete(task)}} className='btn bg-green-600 text-white'>Complete</button>
        </div>
    );
};

export default TaskCard;