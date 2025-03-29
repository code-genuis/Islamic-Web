"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Instagram, Phone } from "lucide-react"; // Icons

const FixedButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        className="flex items-center justify-center text-white rounded-full bg-primary shadow-xl hover:shadow-xl transition-all duration-300"
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X className="text-white w-12 h-12 p-2 bg-secondary rounded-full" />
        ) : (
          <MessageCircle className="text-white w-12 h-12 p-2" />
        )}
      </motion.button>

      {open && (
        <motion.div
          className="absolute bottom-24 right-0 w-96 bg-gray-50 shadow-2xl rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black">Need Help?</h2>
            <button
              type="button"
              title="button"
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-secondary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-700 mb-4">
            Hello! How can I assist you today?
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/+923175865306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D]
            text-slate-950 rounded-lg shadow-md hover:bg-transparent border-primary border transition-all"
            >
              <Phone className="w-6 h-6" /> Chat on WhatsApp
            </a>

            <a
              href="https://www.instagram.com/ustazportal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:brightness-110 text-gray-50 rounded-lg shadow-md hover:bg-transparent border-primary border transition-all"
            >
              <Instagram className="w-6 h-6" /> Visit Instagram
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FixedButton;
