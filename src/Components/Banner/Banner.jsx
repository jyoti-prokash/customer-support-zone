import React from "react";


const Banner = ({ selectedTask, resolvedTask }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-10 gap-5 md:gap-10 px-4 md:px-0">
        <div className="w-full md:w-1/2 text-white text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-64 md:h-80 rounded-lg flex flex-col items-center justify-center">
          <h2 className="font-semibold">In-Progress</h2>
          <span className="text-6xl font-bold">{selectedTask.length}</span>
        </div>

        <div className="w-full md:w-1/2 text-white text-2xl bg-linear-to-r from-green-400 to-green-700 h-64 md:h-80 rounded-lg flex flex-col items-center justify-center">
          <h2 className="font-semibold">Resolved</h2>
          <span className="text-6xl font-bold">{resolvedTask.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
