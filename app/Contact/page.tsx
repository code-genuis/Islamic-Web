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

      <div className="min-h-screen bg-black flex items-center justify-center pt-44 pb-24 md:pb-12 md:pt-16">
          <ContactForm />
      </div>
    </>
  );
}

export default App;
