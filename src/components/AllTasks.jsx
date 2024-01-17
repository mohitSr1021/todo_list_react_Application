import React, { useEffect, useState } from "react";

function AllTasks() {
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("pendingTasks");

    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setPendingTasks(parsedTasks);
    }
  }, []);

  return (
    <>
      <h1 className="w-full pt-6 pb-6 text-xl text-bold tracking-wide capitalize pl-10">
        Pending Task Details
      </h1>
      <h2 className="w-fit h-fit ml-10 mt-0 mb-2 pl-4 pr-4 pt-1 pb-1 bg-yellow-200 text-2xl font-bold tracking-wide text-black">{pendingTasks.length}</h2>
      <div className="h-screen flex flex-col items-start justify-start gap-5 pl-10 pr-10 pt-4 pb-4">
        {pendingTasks.length > 0 ? (
          pendingTasks.map((task, index) => (
            <div key={index} className="w-full min-h-40 bg-red-200 rounded-sm mb-4">
              <h1 className="p-4 capitalize rounded-sm text-2xl text-black font-bold">{task.task}</h1>
              <p className="pl-4 pr-4 pb-4 capitalize text-lg text-black">{task.summary}</p>
            </div>
          ))
        ) : (
          <p className="ml-auto mr-auto">No pending tasks</p>
        )}
      </div>
    </>
  );
}

export default AllTasks;
