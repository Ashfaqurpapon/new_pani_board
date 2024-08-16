import React from "react";
import "./ShorboShes.css";

const ShorboShes = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          {/* Title Section */}
          <div className="bg-green-500 text-white p-2 rounded-t- flex justify-items-start">
            <h2 className="text-xl font-bold">সর্বশেষ খবর</h2>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <ul className="space-y-2">
              <li className="text-gray-200">p</li>
              <li className="text-gray-200">p</li>
              <li className="text-gray-200">p</li>
              <li className="text-gray-200">p</li>
            </ul>
          </div>

          {/* "Shokol" Button in the Bottom Left */}
          <div className="flex justify-end p-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              সকল খবর
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShorboShes;
