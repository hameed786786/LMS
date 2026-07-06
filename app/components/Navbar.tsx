"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Solution", href: "#solution" },
    { label: "Products", href: "#products" },
    { label: "AI", href: "#ai" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      {/* Main Navbar Capsule */}
      <div className="max-w-[1440px] mx-auto">
        <nav className="w-full md:w-[1330px] md:h-[57px] md:mx-auto relative flex items-center justify-between bg-white border border-neutral-200/40 rounded-[16px] px-6 py-2.5 shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none" aria-label="Home">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={31}
                height={30}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-inter font-normal text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:flex items-center ">
            <Link
              href="#book-demo"
              className="w-[123px] h-[33px] rounded-[8px] inline-flex items-center justify-center px-5 py-2  text-sm font-medium text-white bg-neutral-950 hover:bg-neutral-800 active:scale-98 transition-all duration-200 shadow-sm"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-4 right-4 top-20 transition-all duration-300 ease-out origin-top ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col gap-4 bg-white/95 backdrop-blur-xl border border-neutral-200/40 rounded-3xl p-6 shadow-lg">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-inter text-base font-normal text-neutral-500 hover:text-neutral-900 py-1 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="h-px bg-neutral-100 my-1" />
          <Link
            href="#book-demo"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-850 transition-all duration-200 shadow-sm"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
