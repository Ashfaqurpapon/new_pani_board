import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const NoticeBoard = () => {
  const notices = [
    "অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)",
    "ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।",
    "অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)",
    "Office order",
    "পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর",
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0">
          <img
            src="./notice board image.jpg"
            alt="Notice Board"
            className="w-12 h-12 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="pl-6">
          <h2 className="text-xl font-bold mb-4 flex justify-items-start">
            Notice Board
          </h2>
          <ul className="space-y-2">
            {notices.map((notice, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2" />
                <span className="relative group cursor-pointer">
                  {notice}
                  <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-max p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {notice}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
