"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-xl shadow-md bg-white transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-5 text-left rounded-xl bg-slate-200 hover:bg-gray-50 "
      >
        <h4 className="text-base md:text-sm font-medium ">{question}</h4>
        <IoIosArrowDown
          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        className="px-6 overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <p className="pb-6 py-1 text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
