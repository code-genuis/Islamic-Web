import React from "react";
import { Book } from "lucide-react";
import bgImage from "@/app/assets/img/bg.webp";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-gray-700 text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mx-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                About Me
              </h3>
              <p className="text-gray-400">
                A Muslim video creator and photographer who loves adventure
                motorcycles and traveling the world to document his journey.
              </p>
            </div>

            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                Useful Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+923259787077"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    +92 325 9787 077
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@allehtisham.com"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    info@allehtisham.com
                  </a>
                </li>
                <li className="text-gray-400">Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary my-8"></div>

          <div className="text-center text-gray-400">
            <p>
              Copyright © 2025 All Rights Reserved By <a className="text-secondary" href="#">UstazPortal</a> | Designed by
              <a
                className="text-white"
                href="https://portfolio.triplealpha.blog/"
              >
                {" "}
                CodeGenius.Dev
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
