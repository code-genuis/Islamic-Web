"use client";
import React, { useState, useEffect } from "react";
import { Book } from "lucide-react";
import { HeaderMenu } from "@/app/mockData/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          ))}
        </ul>

        {/* Center logo */}
        <div
          className={`flex items-center gap-2 font-bold text-xl transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <Book
            className={`h-6 w-6 transition-colors ${
              scrolled ? "text-primary" : "text-secondary"
            }`}
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
          className={`rounded-lg px-6 py-2 font-medium text-lg transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-primary"
              : "bg-white font-semibold text-primary hover:bg-gray-100"
          }`}
        >
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
