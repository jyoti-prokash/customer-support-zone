import React from 'react';
import ResolvedCard from './ResolvedCard';

const ResolvedTask = ({resolvedTask}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Resolved Task</h1>
            <div>
                {
                    resolvedTask.map(task => <ResolvedCard task={task}></ResolvedCard>)
                }
            </div>
        </div>
    );
};

export default ResolvedTask;