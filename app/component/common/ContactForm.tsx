"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  User,
  Building,
  MapPin,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    robot: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-between bg-gray-50">
              <div>
                <div className="inline-block px-4 py-2 bg-primary rounded-full mb-6">
                  <p className="text-white font-semibold tracking-wider text-sm">
                    FOLLOW ME ON
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                  Get In Touch
                </h1>
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-gray-500 hover:text-primary transform hover:scale-105 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center gap-2">
                    <MapPin size={20} className="text-primary" />
                    123 Business Avenue, Suite 100
                  </p>
                  <p className="flex items-center gap-2">
                    <Building size={20} className="text-primary" />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div>
                <p className="text-2xl text-black font-light mb-2">We Always</p>
                <p className="text-3xl text-primary font-semibold">
                  Ready to Hear From You
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-8 md:p-12 bg-white backdrop-blur-sm">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-black border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 relative"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-black border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 relative"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-black border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 relative"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-black border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 relative"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="relative group md:col-span-2">
                  <div className="absolute inset-0 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <textarea
                    placeholder="Write Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 text-black border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 resize-none relative"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="robot"
                        className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-gray-800/50"
                        checked={formData.robot}
                        onChange={(e) =>
                          setFormData({ ...formData, robot: e.target.checked })
                        }
                        required
                      />
                    </div>
                    <span className="text-black group-hover:text-gray-500 transition-colors duration-300">
                      I'm not a robot
                    </span>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-transparent hover:border-primary border-2 text-white hover:text-black font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Submit Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
