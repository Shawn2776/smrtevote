"use client";

import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="hidden w-64 bg-gray-800 md:block">
        <div className="p-4">
          <a href="#" className="block text-white">
            Page 1
          </a>
          <a href="#" className="block mt-2 text-white">
            Page 2
          </a>
          {/* Add more links here */}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <select
        className="block w-full p-2 text-white bg-gray-800 md:hidden"
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="page1">Page 1</option>
        <option value="page2">Page 2</option>
        {/* Add more options here */}
      </select>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top navigation */}
        <div className="bg-white shadow-md">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div>
                <img src="/logo.svg" alt="Logo" className="w-auto h-8" />
              </div>
              <div className="hidden space-x-4 md:flex">
                <a href="#" className="text-gray-600">
                  Link 1
                </a>
                <a href="#" className="text-gray-600">
                  Link 2
                </a>
                {/* Add more links here */}
              </div>
              <div className="md:hidden">
                <button
                  className="text-gray-600 focus:outline-none"
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                  {/* Hamburger icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile navigation */}
          {isMobileNavOpen && (
            <div className="bg-white shadow-md md:hidden">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col py-4 space-y-4">
                  <a href="#" className="text-gray-600">
                    Link 1
                  </a>
                  <a href="#" className="text-gray-600">
                    Link 2
                  </a>
                  {/* Add more links here */}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
