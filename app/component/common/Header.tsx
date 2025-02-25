"use client";
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { HeaderMenu } from "@/app/mockData/data";
import logo1 from "@/app/assets/img/UstazPortal_Logo1.ico";
import logo2 from "@/app/assets/img/UstazPortal_Logo2.ico";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
=======
import { Book } from "lucide-react";
import { HeaderMenu } from "@/app/mockData/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
>>>>>>> 4f5dfe3 (first commit)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
<<<<<<< HEAD
      <nav className="container mx-auto px-4 flex items-center justify-between max-w-[1200px] flex-wrap">
        {/* Hamburger Menu */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-24 left-0 w-full bg-gray-50 shadow-md flex flex-col md:hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {HeaderMenu.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className="text-black text-lg font-medium border-gray-200 p-4 border-b hover:text-primary"
            >
              <p>{menu.title}</p>
            </a>
          ))}
          <button
            title="Login"
            type="button"
            className="block md:hidden items-center gap-6 px-6 py-2 text-lg transition-all duration-300 bg-primary text-white hover:bg-black"
          >
            Login
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {HeaderMenu.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.link}
                className={`text-base font-medium transition-colors ${
                  scrolled
                    ? "text-primary hover:text-secondary text-lg font-semibold"
                    : "text-white hover:text-secondary"
                }`}
              >
                {menu.title}
              </a>
            </li>
=======
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <ul className="flex items-center gap-6">
          {HeaderMenu.map((menu, index) => (
            <>
              <li>
                <a
                  key={index}
                  href={menu.link}
                  className={`text-base font-medium transition-colors ${
                    scrolled
                      ? "text-primary hover:text-secondary text-lg font-semibold"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  {menu.title}
                </a>
              </li>
            </>
>>>>>>> 4f5dfe3 (first commit)
          ))}
        </ul>

        {/* Center logo */}
        <div
<<<<<<< HEAD
          className={`flex items-center gap-2 font-bold text-2xl transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <img
            src={scrolled ? logo2.src : logo1.src}
            alt="UstazPortal"
            width={scrolled ? "80" : "70"}
            height={scrolled ? "80" : "70"}
            loading="eager"
            className="max-w-full h-auto"
=======
          className={`flex items-center gap-2 font-bold text-xl transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <Book
            className={`h-6 w-6 transition-colors ${
              scrolled ? "text-primary" : "text-secondary"
            }`}
>>>>>>> 4f5dfe3 (first commit)
          />

          <span
            className={`${
              scrolled ? "text-secondary text-2xl" : "text-primary"
            }`}
          >
            Ustaz
          </span>
          <span
            className={`${
              scrolled ? "text-primary text-2xl" : "text-white"
            } -ml-1`}
          >
            Portal
          </span>
        </div>

        {/* Login button */}
        <button
          title="Login"
          type="button"
<<<<<<< HEAD
          className={`rounded-lg px-6 py-2 hidden md:block font-medium text-lg transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-primary"
              : "bg-white font-semibold text-primary hover:bg-gray-100"
          } md:block`}
=======
          className={`rounded-lg px-6 py-2 font-medium text-lg transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-primary"
              : "bg-white font-semibold text-primary hover:bg-gray-100"
          }`}
>>>>>>> 4f5dfe3 (first commit)
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
