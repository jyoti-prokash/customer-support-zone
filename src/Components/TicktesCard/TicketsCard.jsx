import { FaCalendar } from 'react-icons/fa6';

const TicketsCard = ({ticket, selectedTask, setSelectedTask, count, setCount}) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    
    const priorityStyle =
    priority === "High"
      ? "text-red-500"
      : priority === "Medium"
      ? "text-orange-500"
      : "text-green-600";
      const handleSelected = (ticket) => {
        setSelectedTask([...selectedTask, ticket]);
        setCount(count + 1);
      }
    return (
        <div className='bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition duration-300 cursor-pointer'>
                <div className='flex items-center justify-between p-3 rounded-lg'>
                    <h1 className='font-semibold text-gray-800 text-sm'>{title}</h1>
                    <button onClick={()=>{handleSelected(ticket)}} className='btn btn-sm btn-primary'>{status}</button>
                </div>
                    <p className='text-xs text-gray-500 mb-4 leading-5'>{description}</p>
                <div className='flex items-center justify-between mt-3'>
                    <p className="text-gray-400">#{id}</p>
                    <p className={`px-3 py-1 text-xs rounded-full font-medium ${priorityStyle}`}>{priority}</p>
                    <p>{customer}</p>
                    <p> <span className='inline-block'><FaCalendar></FaCalendar></span> {createdAt}</p>
                </div>
        </div>
    );
};

export default TicketsCard;