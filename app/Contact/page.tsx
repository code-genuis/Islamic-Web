"use client";
import React, { useState } from "react";
import ContactForm from "@/app/component/common/ContactForm";
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
<<<<<<< HEAD
      <div className="min-h-screen bg-black flex items-center justify-center pt-44 pb-24 md:pb-12 md:pt-16">
=======
      <div className="min-h-screen bg-black flex items-center justify-center pt-6 md:pt-12">
>>>>>>> 4f5dfe3 (first commit)
          <ContactForm />
      </div>
    </>
  );
}

export default App;
