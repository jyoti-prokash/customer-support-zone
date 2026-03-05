import React from 'react';
import TaskCard from './TaskCard';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const TaskStatus = ({selectedTask, resolvedTask, setResolvedTask, removedSelectedTask}) => {
    
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Task Status</h1>
            <div>
                {
                    selectedTask.map(task => <TaskCard removedSelectedTask={removedSelectedTask} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} key={task.id} task={task} ></TaskCard>)
                }
            </div>
            <div className='mt-10'>
                <ResolvedTask resolvedTask={resolvedTask}></ResolvedTask>
            </div>
        </div>
    );
};

export default TaskStatus;