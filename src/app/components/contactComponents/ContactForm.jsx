"use client";

import Image from "next/image";
import { useState } from "react";
import bgImage from "../../assets/hunza.jpeg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    people: "",
    days: "",
    location: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto  rounded-2xl overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-72 w-full">
          <Image
            src={bgImage} // Replace with actual path or URL
            alt="Tour Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Plan Your Custom Tour
            </h2>
            <p className="mt-2 text-sm sm:text-base max-w-xl">
              Fill out the form below and we will get back to you with a
              personalized itinerary.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-300"
        >
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              WhatsApp (Optional)
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Country Name
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Number of People
            </label>
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              min={1}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Number of Days
            </label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              min={1}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Location You Want to Visit
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Tour Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Tour End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              You can write your requirment/message here
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Any special preferences or questions?"
            ></textarea>
          </div>

          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Company Contact Info */}
        <div className="bg-slate-300 text-sm px-8 py-6 text-left md:text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Or reach us at:
          </h3>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Email:</span> travelpakistan@gmail.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">WhatsApp:</span> 0333-0505050
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Visit us:</span> Office #123, Street
            ABC, Blue Area, Islamabad
          </p>
        </div>
      </div>
    </div>
  );
}
