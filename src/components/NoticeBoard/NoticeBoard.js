import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon from react-icons

const NoticeBoard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start">
        {/* Image in the top left corner */}
        <div className="mr-4 flex-shrink-0">
          <img
            src="https://via.placeholder.com/50" // Replace with your image URL
            alt="Notice Board"
            className="w-12 h-12 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Title and Items */}
        <div>
          <h2 className="text-xl font-bold mb-4">Notice Board</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Office order</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>
                পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম
                কম্পিউটার অপারেটর
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
