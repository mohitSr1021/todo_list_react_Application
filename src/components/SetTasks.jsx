import { useColorModeValue } from "@chakra-ui/react";
import taskPending from "../assests/pending-task.jpg";
import taskCompleted from "../assests/taskCompleted.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// chakra ui
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function App() {
  const bg = useColorModeValue("bg-slate-200", "bg-slate-800");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [inputTask, setInputTask] = useState("");
  const [inputSummary, setInputSummary] = useState("");

  // alert states
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertStatus, setAlertStatus] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("pendingTasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks); // This will convert the JSON string into a JSON object.
      console.log("Loaded tasks from localStorage:", parsedTasks);
      setPendingTasks(parsedTasks);
    }

    // Load completed tasks from localStorage
    const storedCompletedTasks = localStorage.getItem("completedTasks");
    if (storedCompletedTasks) {
      const parsedCompletedTasks = JSON.parse(storedCompletedTasks);
      setCompletedTasks(parsedCompletedTasks);
    }
  }, []);

  const handleInputTask = (e) => {
    setInputTask(e.target.value);
  };

  const handleSummary = (e) => {
    setInputSummary(e.target.value);
  };

  const addPendingTask = () => {
    if (inputTask !== "") {
      const filterInput = inputTask.trim();
      const summaryValue =
        inputSummary.trim() !== "" ? inputSummary.trim() : "N/a";

      setPendingTasks((prevTasks) => {
        const newTask = {
          task: filterInput,
          summary: summaryValue,
        };
        const updatedTasks = [...prevTasks, newTask];
        localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));
        console.log("Updated pendingTasks after addition:", updatedTasks);
        return updatedTasks;
      });
      setInputTask("");
      setInputSummary("");

      // Show success message
      setAlertMessage("Task added successfully!");
      setAlertStatus("success"); // Set the status to "success"
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2000);
    } else {
      // Show error message
      setAlertMessage("Task is empty!");
      setAlertStatus("error"); // Set the status to "error"
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2000);
    }
  };

  // delete task function
  const deleteTask = (index) => {
    setPendingTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1); // Remove the task at the specified index
      localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  // delete Complete task function
  const deleteCompletedTask = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks];
      updatedCompletedTasks.splice(index, 1);

      localStorage.setItem(
        "completedTasks",
        JSON.stringify(updatedCompletedTasks)
      );
      return updatedCompletedTasks;
    });
  };

  // completed tasks function
  const completedTask = (index) => {
    setPendingTasks((prevTasks) => {
      const completedTask = prevTasks[index];
      const updatedPendingTasks = [...prevTasks];
      updatedPendingTasks.splice(index, 1);

      localStorage.setItem("pendingTasks", JSON.stringify(updatedPendingTasks));

      setCompletedTasks((_) => [...completedTasks, completedTask]);

      localStorage.setItem(
        "completedTasks",
        JSON.stringify([...completedTasks, completedTask])
      );

      return updatedPendingTasks;
    });
  };

  const getTotalPendingTasks = () => {
    return pendingTasks.length;
  };

  const getTotalCompletedTasks = () => {
    return completedTasks.length;
  };

  // clear all Pending Tasks
  const clearAllPendingTasks = () => {
    if (pendingTasks.length === 0) {
      setAlertMessage("You haven't added any tasks!");
      setAlertStatus("info");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2500);
    } else {
      setPendingTasks([]);
      localStorage.removeItem("pendingTasks");

      setAlertMessage("All pending tasks cleared!");
      setAlertStatus("success");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2000);
    }
  };

  // clear all Completed Tasks
  const clearAllCompletedTasks = () => {
    if (completedTasks.length === 0) {
      setAlertMessage("You haven't completed any task!");
      setAlertStatus("info");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2500);
    } else {
      setCompletedTasks([]);
      localStorage.removeItem("completedTasks");

      setAlertMessage("All Completed tasks are cleared!");
      setAlertStatus("success");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
        setAlertStatus("");
      }, 2000);
    }
  };

  return (
    <>
      <div
        className={`w-full h-fit max-h-fit ${bg} flex flex-col md:flex-row justify-between gap-4 p-4`}
      >
        {/* Left Section */}
        <div
          className={`w-full h-96 md:w-1/3 lg:w-1/4  flex flex-col gap-4 ${bg} border-t-4 border-r-0 border-l-0 shadow-xl border-gray-200 rounded p-2 shadow-custom`}
        >
          <div
            className={`w-full h-14 flex items-center gap-2 bg-slate-700 text-white font-bold border-4 border-gray-700 rounded mb-4 mt-4 shadow-custom`}
          >
            <img className="h-full rounded-md" src={taskPending} alt="logo" />
            <h1 className="uppercase">PENDING TASKS</h1>
            <p className="w-fit min-w-6 text-red-300 text-center">
              {getTotalPendingTasks()}
            </p>
          </div>
          <div className="w-full h-5/6 flex flex-col items-center gap-4 overflow-auto text-white px-4 overflow-scrollbar-css">
            {pendingTasks.length > 0 ? (
              pendingTasks.map((pendingTask, index) => (
                <div
                  className="bg-yellow-50 w-full rounded-md h-fit shadow-lg"
                  key={index}
                >
                  <h2 className="w-full h-7 text-black bg-red-100 font-bold text-lg pt-0 pl-2 pr-2 rounded-t truncate capitalize">
                    {pendingTask.task}
                  </h2>
                  <p className="w-full h-10 text-sm text-black pl-2 overflow-hidden truncate">
                    {pendingTask.summary}
                  </p>
                  <div className="w-full h-8 flex rounded-b">
                    <Link to="/view-tasks">
                      <div className="flex justify-center  h-full items-center w-auto p-1 gap-1 rounded-bl hover:bg-slate-400 ">
                        <i className="fa-regular fa-eye text-black"></i>
                        <h6 className="text-black font-bold mb-1 ">view</h6>
                      </div>
                    </Link>
                    <div className="w-full flex justify-end">
                      <button onClick={() => deleteTask(index)}>
                        <i className="fa-solid fa-trash-can text-red-500 w-7 text-lg flex items-center justify-center h-full transform transition-transform hover:scale-110"></i>
                      </button>
                      <button onClick={() => completedTask(index)}>
                        <i className="fa-solid fa-check text-green-900 w-10 text-2xl flex items-center justify-center h-full transform transition-transform hover:scale-110 "></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center m-auto">
                No pending tasks
              </div>
            )}
          </div>
          <div
            onClick={clearAllPendingTasks}
            className="w-fit bg-slate-900 hover:bg-red-800 rounded-md ml-auto mr-auto mt-1 mb-1 text-white pl-2 pr-2 pt-1 pb-1 cursor-pointer flex gap-2 items-center  shadow-custom"
          >
            <i class="fa-solid fa-trash"></i>
            <span>Clear All Pending Tasks</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="mt-10 w-full h-fit md:w-1/2 border-2 bg-slate-300 border-white">
          {showAlert && (
            <Alert status={alertStatus}>
              <AlertIcon />
              <AlertTitle m={4} fontSize="lg">
                {alertMessage}
              </AlertTitle>
              <AlertDescription>
                {alertStatus === "success"
                  ? ":)"
                  : alertStatus === "info" &&
                    (pendingTasks.length === 0
                      ? "Please add a task before clearing!"
                      : completedTasks.length === 0
                      ? "Please complete your tasks before clearing!"
                      : null)}
              </AlertDescription>
            </Alert>
          )}

          <div className="w-full p-4 text-center font-roboto border shadow">
            <h1 className="w-full h-fit text-xl font-extrabold uppercase  text-blue-950">
              TO DO LIST
            </h1>
          </div>
          <div>
            <div className="w-full h-fit p-2 flex flex-col gap-2 mt-1">
              <div>
                <label className="font-extrabold tracking-wider text-lg  text-blue-950">
                  Task
                </label>
                <span className="text-2xl font-bold text-red-600 ml-1">*</span>
              </div>
              <div className="w-full flex gap-2">
                <input
                  className="w-full p-2 focus:outline-none"
                  type="text"
                  placeholder="Enter your Task"
                  maxLength={45}
                  value={inputTask}
                  onChange={handleInputTask}
                />
                <button
                  className=" w-fit p-3 bg-green-500 border shadow-lg border-slate-100 text-white font-roboto font-semibold "
                  onClick={addPendingTask}
                >
                  ADD
                </button>
              </div>
              <div>
                <label className="font-extrabold tracking-wider text-lg text-blue-950">
                  Summary
                </label>
                <div>
                  <textarea
                    className="w-full focus:outline-none p-2 mt-1"
                    placeholder="Enter your Task Summary"
                    rows={3}
                    maxLength={200}
                    value={inputSummary}
                    onChange={handleSummary}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`w-full h-96 shadow-custom md:w-1/3 lg:w-1/4 flex flex-col gap-4 ${bg} border-t-4 border-r-0 border-l-0 shadow-xl border-gray-200 rounded p-2`}
        >
          <div
            className={`w-full h-14 flex items-center gap-2 bg-green-700 text-white font-bold border-4 border-green-700 rounded mb-4 mt-4 shadow-custom`}
          >
            <img className="h-full rounded-md" src={taskCompleted} alt="logo" />
            <h1 className="uppercase">COMPLETED TASKS</h1>
            <p className="w-fit min-w-6 text-slate-200 text-center">
              {getTotalCompletedTasks()}
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-2 h-5/6 overflow-auto text-white px-4 overflow-scrollbar-css">
            {completedTasks.length > 0 ? (
              completedTasks.map((completedTask, index) => (
                <div
                  className="bg-green-100 text-black w-full rounded-md h-fit shadow-lg"
                  key={index}
                >
                  <h2 className="w-full h-7 text-black bg-green-100 font-bold text-lg pt-0 pl-2 pr-2 rounded-t truncate capitalize">
                    {completedTask.task}
                  </h2>
                  <p className="w-full h-10 text-sm text-black pl-2 overflow-hidden truncate">
                    {completedTask.summary}
                  </p>
                  <div className="w-full h-8 flex rounded-b">
                    <Link to="/view-tasks">
                      <div className="flex justify-center h-full items-center w-auto p-1 gap-1 rounded-bl hover:bg-slate-200 ">
                        <i className="fa-regular fa-eye text-black hidden"></i>
                        <h6 className="text-black font-bold mb-1 h-full hidden">
                          view
                        </h6>
                      </div>
                    </Link>
                    <div className="w-full flex justify-end mr-3">
                      <button onClick={() => deleteCompletedTask(index)}>
                        <i className="fa-solid fa-trash-can text-red-500 w-7 text-lg flex items-center justify-center h-full transform transition-transform hover:scale-110"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center m-auto">
                No completed tasks
              </div>
            )}
          </div>
          <div
            onClick={clearAllCompletedTasks}
            className="w-fit bg-slate-900 hover:bg-green-800 rounded-md ml-auto mr-auto mt-1 mb-1 text-white pl-2 pr-2 pt-1 pb-1 cursor-pointer flex gap-2 items-center shadow-custom"
          >
            <i class="fa-solid fa-trash"></i>
            <span>Clear All Completed Tasks</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
