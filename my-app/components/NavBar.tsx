"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "../context/Theme";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className="w-full shadow-md fixed top-0 left-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-40 md:py-[18px]">
        {/* Left Icon */}
        <div className="text-xl">
          <FaReact />
        </div>

        {/* Center Links (hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="#home"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
          >
            About
          </Link>
          <Link
            href="#work"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
          >
            Contact
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-xl focus:outline-none"
            style={{ color: "inherit" }}
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* Hamburger Icon */}
          <div
            className="text-xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pt-2 pb-4 shadow-md transition-all duration-300 ${
          isOpen
            ? "opacity-100 max-h-60 overflow-visible"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex flex-col gap-4 text-sm font-medium">
          <Link
            href="#home"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#work"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
            onClick={toggleMenu}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-500 transition"
            style={{ color: "inherit" }}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
