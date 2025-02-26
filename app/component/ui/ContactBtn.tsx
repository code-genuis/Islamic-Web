"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Instagram, Phone } from "lucide-react"; // Icons

const FixedButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <motion.button
        className="flex items-center justify-center text-white rounded-full bg-primary shadow-xl hover:shadow-xl transition-all duration-300 w-12 h-12 md:w-14 md:h-14"
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X className="text-white w-10 h-10 p-2 bg-secondary rounded-full md:w-12 md:h-12" />
        ) : (
          <MessageCircle className="text-white w-10 h-10 p-2 md:w-12 md:h-12" />
        )}
      </motion.button>

      {open && (
        <motion.div
          className="absolute bottom-20 right-0 w-72 sm:w-80 md:w-96 bg-gray-50 shadow-2xl rounded-lg p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h2 className="text-lg md:text-xl font-bold text-black">
              Need Help?
            </h2>
            <button
              type="button"
              title="button"
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-secondary"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
            Hello! How can I assist you today?
          </p>

          <div className="flex flex-col gap-2 md:gap-3">
            <a
              href="https://wa.me/+923175865306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 bg-[#25D366] hover:bg-[#1EBE5D]
            text-slate-950 rounded-lg shadow-md hover:bg-transparent border-primary border transition-all text-sm md:text-base"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" /> Chat on WhatsApp
            </a>

            <a
              href="https://www.instagram.com/ustazportal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:brightness-110 text-gray-50 rounded-lg shadow-md hover:bg-transparent border-primary border transition-all text-sm md:text-base"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" /> Visit Instagram
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FixedButton;
