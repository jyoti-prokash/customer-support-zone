import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AllCustomerTickets from './Components/AllCustomerTickets/AllCustomerTickets'
import TaskStatus from './Components/TaskStatus/TaskStatus'

const TicketsPromise = fetch('/tickets.json').then(res => res.json())
function App() {
  const [count, setCount] = useState(0)
  console.log(count);
  const [selectedTask, setSelectedTask] = useState([])
  return (
    <>
      <section className='w-300 mx-auto'>
          <Navbar/>
          <Banner count={count}/>
          <div className='flex gap-10 my-10'>
          <Suspense fallback={<div className='text-center text-2xl font-bold'><span className="loading loading-dots loading-xl"></span></div>}>
            <AllCustomerTickets count={count} setCount={setCount} TicketsPromise={TicketsPromise} selectedTask={selectedTask} setSelectedTask={setSelectedTask}></AllCustomerTickets>
          </Suspense>
          <TaskStatus selectedTask={selectedTask}></TaskStatus>
          </div>
          <Footer/>
      </section>
    </>
  )
}

export default App
