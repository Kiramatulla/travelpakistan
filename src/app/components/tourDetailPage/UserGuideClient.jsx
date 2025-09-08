// components/UserGuideClient.jsx
"use client";

import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FiChevronDown } from "react-icons/fi";

export default function UserGuideClient({ guidePoints }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block bg-gradient-to-br from-blue-50 to-white border border-slate-200 rounded-xl shadow-sm p-4 mb-6 font-sans">
      {/* Header with toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <h3 className="text-base font-semibold text-slate-800">User Guide</h3>
        <FiChevronDown
          size={18}
          className={`text-slate-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Collapsible content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          {guidePoints.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <TiTick
                className="text-teal-600 mt-0.5 flex-shrink-0"
                size={14}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
