import React from 'react';
import TaskCard from './TaskCard';

const TaskStatus = ({selectedTask}) => {
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Task Status</h1>
            <div>
                {
                    selectedTask.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TaskStatus;