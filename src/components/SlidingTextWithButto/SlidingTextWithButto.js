import React, { useEffect, useState } from "react";
import "./SlidingTextWithButto.css";

const SlidingTextWithButto = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textItems = [
    "যোগদানপত্র (মাহফুজুর রহমান) (২০২৪-০২-১৩)",
    "বাপাউবোর মহাপরিচালক পদে চলতি দায়িত্ব প্রদান (জনাব মুহাম্মদ আমিরুল হক ভূঞা) (২০২৪-০৩-১০)",
    "যোগদান পত্র (মোহাম্মদ হাবীবুর রহমান, যুগ্মসচিব) (২০২৪-০৫-০৮)",
    "যোগদান পত্র (মোহাম্মদ হাবীবুর রহমান, যুগ্মসচিব) (২০২৪-০৫-০৮)",
    "যোগদান পত্র (মোহাম্মদ হাবীবুর রহমান, যুগ্মসচিব) (২০২৪-০৫-০৮)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textItems.length]);

  return (
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-md h-40 flex items-center justify-between">
      {/* Sliding Text */}
      <div className="flex items-center overflow-hidden">
        <div className="text-lg font-bold pr-2">খবর:</div>
        <div className="text-lg animate-slide">
          {textItems[currentTextIndex]}
        </div>
      </div>

      {/* Button at the end of the line */}
      <div>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          View All
        </button>
      </div>
    </div>
  );
};

export default SlidingTextWithButto;
