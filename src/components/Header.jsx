import { Link } from "react-router-dom";
import ColorModeSwitcher from "./ColorModeSwitcher";
import myPic from "../assests/mypic.png";
import Clock from "./Clock";

function Header() {

  return (
    <>
      <div
        className=" z-10 w-full p-3 text-center bg-gray-800 text-white sticky top-0 shadow-md"
        id="Header"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center justify-center gap-2 w-full md:w-fit m-2">
            <img
              src={myPic}
              alt="My pic"
              className="w-16 h-16 rounded-full md:mr-2 object-cover p-1"
            />
            <div className="flex flex-col items-start">
              <h5 className="font-semibold mb-1">Mohit Singh Rawat</h5>
              <p className="text-gray-400 text-left text-sm ">
                Web Developer and Cybersecurity Enthusiast
              </p>
            </div>
          </div>
          <div className="w-fit m-auto md:w-auto flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold uppercase mt-2">T0-[)0 List</h1>
          </div>

          <div className="w-full md:w-96 h-full">
            <h1 className="text-sm font-bold uppercase mt-2">
              <Clock />
            </h1>
          </div>
        </div>

        <nav className="mt-4 text-lg">
          <ul className="flex justify-center space-x-auto gap-5 items-center ">
            <li>
              <Link to="/home" className="hover:text-gray-400 focus:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/task" className="hover:text-gray-400 focus:text-green-400">
                SeTask
              </Link>
            </li>
            <li>
              <Link to="/view-tasks" className="hover:text-gray-400 focus:text-green-400">
                ViewTask
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="hover:text-gray-400 focus:text-green-400 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 focus:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
          <ColorModeSwitcher />
        </nav>
      </div>
    </>
  );
}

export default Header;
