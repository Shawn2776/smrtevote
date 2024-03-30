"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const VNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0">
      <div className="relative">
        {/* mobile menu logo and buttons*/}
        <div className="flex items-center justify-between px-4 py-2 md:hidden">
          <div className="relative h-10 w-28">
            <Image
              className="w-auto h-12 sm:h-14"
              src="/smrtevote.png"
              alt=""
              fill
            />
          </div>
          <div>
            <button
              onClick={handleMenuClick}
              className={
                isOpen
                  ? "hidden"
                  : "duration-300 transform transition-transform"
              }
            >
              <MdMenu size={40} />
            </button>
            <button
              onClick={handleMenuClick}
              className={
                isOpen
                  ? "duration-300 transform transition-transform"
                  : "hidden"
              }
            >
              <MdClose size={40} />
            </button>
          </div>
        </div>

        {/* mobile menu items  */}
        <div
          className={`${
            !isOpen ? "-translate-x-full" : "translate-x-0"
          } transform top-0 border-r left-0 w-80 bg-bgSoft fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
        >
          test test
          <br /> test test test
        </div>

        {/* desktop menu */}
      </div>
    </nav>
  );
};

export default VNavbar;
