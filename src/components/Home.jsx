import React from "react";

function Home() {
  return (
    <div className="w-full h-auto md:h-96 flex items-center justify-center flex-col text-center">
      <h1 className="text-4xl font-bold mb-4 mt-10">Welcome to This Project 😎</h1>
      <p className="text-lg text-blue-300">
        Check this project and give me feedback and suggestions📝
      </p>
      {/* Additional Content */}
      <div className="mt-0 mb-6 flex justify-center flex-col p-3 w-full md:w-1/2">
        <ul className="list-none ">
          <li>
            <p className=" text-gray-600">
              “Todo List” Project is a simple and efficient task management
              application that allows users to create, edit, and organize their
              daily tasks. With an intuitive interface, users can mark tasks as
              completed, ensuring a streamlined and effective approach to
              managing their to-do lists. The project aims to increase
              productivity by providing a user-friendly platform to organize and
              track tasks as well as add personalized learning.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
