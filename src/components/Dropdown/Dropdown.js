import React from "react";
import { FaHome } from "react-icons/fa";
// Importing a home icon

const Dropdown = () => {
  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Home Icon and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Home Icon */}
          <div className="flex items-center">
            <FaHome className="text-3xl" />
          </div>
          <div className=" group text-1xl">
            <button className=" text-orange-400  bg-white-600 px-4 py-2 rounded-md hover:bg-orange-400 hover:text-sky-400 focus:outline-none">
              About Us
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-orange-400 mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-orange-400 mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-orange-400 mb-2">
                  Header 3
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-orange-400 mb-2">
                  Header 4
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* About Us Button with Dropdown */}
          {/* Organization Button with Dropdown */}
          <div className=" group">
            <button className=" text-red-700  bg-white-600 px-4 py-2 rounded-md hover:bg-red-700  hover:text-sky-400 focus:outline-none">
              Organization
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-red-700  mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-red-700  mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Project Button with Dropdown */}
          <div className=" group">
            <button className=" text-pink-800  bg-white-600 px-4 py-2 rounded-md hover:bg-pink-800   hover:text-sky-400 focus:outline-none">
              Project
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-pink-800   mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-pink-800   mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contract Button with Dropdown */}
          <div className=" group">
            <button className=" text-green-700  bg-white-600 px-4 py-2 rounded-md hover:bg-green-700  hover:text-sky-400 focus:outline-none">
              Contract
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-green-700   mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-green-700   mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Meeting Button with Dropdown */}
          <div className=" group">
            <button className=" text-blue-700  bg-white-600 px-4 py-2 rounded-md hover:bg-blue-700  hover:text-sky-400 focus:outline-none">
              Gallary
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-blue-700  mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-blue-700  mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Related Button with Dropdown */}
          <div className=" group">
            <button className=" text-sky-700  bg-white-600 px-4 py-2 rounded-md hover:bg-sky-700  hover:text-sky-400 focus:outline-none">
              Meeting
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-sky-700  mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-sky-700  mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Download Button with Dropdown */}
          <div className=" group">
            <button className=" text-red-700  bg-white-600 px-4 py-2 rounded-md hover:bg-yellow-700  hover:text-yellow-400 focus:outline-none">
              Download
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-yellow-700  mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-yellow-700  mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Button with Dropdown */}
          <div className=" group">
            <button className=" text-amber-700  bg-white-600 px-4 py-2 rounded-md hover:bg-amber-700   hover:text-sky-400 focus:outline-none">
              Helpline
            </button>
            <div className="absolute left-12 mt-1 w-full bg-white text-blue-600 border border-gray-200 rounded-md shadow-lg hidden group-hover:grid grid-cols-4">
              <div className="p-4">
                <h4 className="font-bold text-lg text-amber-700   mb-2">
                  Header 1
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-amber-700   mb-2">
                  Header 2
                </h4>
                <ul className="list-disc list-inside text-black">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Other Elements (if any) */}
        {/* Add other elements or search bar here */}
      </div>
    </nav>
  );
};

export default Dropdown;
