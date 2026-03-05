import React, { use } from "react";
import TicketsCard from "../TicktesCard/TicketsCard";

const AllCustomerTickets = ({ TicketsPromise, selectedTask, setSelectedTask}) => {
  const tickets = use(TicketsPromise);
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
