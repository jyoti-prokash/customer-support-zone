import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllCustomerTickets from "./Components/AllCustomerTickets/AllCustomerTickets";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { Bounce, ToastContainer } from "react-toastify";

const TicketsPromise = fetch("/tickets.json").then((res) => res.json());
function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  // remove selected task from Task Status when marked as complete
  const removedSelectedTask = (id) => {
    setSelectedTask(selectedTask.filter((task) => task.id !== id));
    const remainingTickets = tickets.filter(t => t.id !== id);
  setTickets(remainingTickets);
  }

  return (
    <>
      <section className="w-full max-w-7xl mx-auto">
        <Navbar />
        <Banner selectedTask={selectedTask} resolvedTask={resolvedTask} />
        <div className="flex flex-wrap gap-10 my-10">
          <Suspense
            fallback={
              <div className="text-center text-2xl font-bold">
                <span className="loading loading-dots loading-xl"></span>
              </div>
            }
          >
            <AllCustomerTickets
            tickets={tickets}
            setTickets={setTickets}
              TicketsPromise={TicketsPromise}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            ></AllCustomerTickets>
          </Suspense>
          <TaskStatus removedSelectedTask={removedSelectedTask} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} selectedTask={selectedTask}></TaskStatus>
        </div>
        <Footer />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
