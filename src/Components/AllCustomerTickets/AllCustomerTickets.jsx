import React, { use, useEffect } from "react";
import TicketsCard from "../TicktesCard/TicketsCard";

const AllCustomerTickets = ({tickets, TicketsPromise, selectedTask, setSelectedTask, setTickets}) => {
  const ticketsData = use(TicketsPromise);
  useEffect(()=>{
    setTickets(ticketsData);
  }, [ticketsData, setTickets])
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold my-5">Customer Tickets</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketsCard key={ticket.id} ticket={ticket} selectedTask={selectedTask} setSelectedTask={setSelectedTask}></TicketsCard>
        ))}
      </div>
    </div>
  );
};

export default AllCustomerTickets;
