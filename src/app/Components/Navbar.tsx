"use client"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0f2a3f] flex justify-between items-center px-6 py-4 sticky top-0 z-20">
      {/* Logo Section */}
      <div>
        <Link href="#" className="text-2xl md:text-3xl ml-5 font-bold">
          Hammad.
        </Link>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#0f2a3f] text-center md:relative md:top-0 md:flex md:w-auto md:items-center`}
      >
        <nav className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 font-bold p-4 md:p-0">
          <Link href="#home" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#Projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#Skills" className="hover:text-blue-500">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
