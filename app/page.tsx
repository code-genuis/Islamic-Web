"use client"
import React from "react";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import ContactBtn from "./component/ui/ContactBtn";
import Hero from "./component/common/Hero";
import Hero2 from "./component/common/Hero2";
import Product from "./component/common/Product";
import FAQ from "./component/common/FAQ";
import ReviewsSlider from "./component/common/reviews";
import bgImage from "@/app/assets/img/bg.webp";
import ContactForm from "@/app/component/common/ContactForm";

const App = () => {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <Header />
      <Hero />
      <Hero2 />
      <Product />
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold green mb-4 text-secondary">
              <span className="text-primary">Have Questions?</span> We're Here
              to Help
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our services. Can't
              find what you're looking for? Feel free to contact our support
              team.
            </p>
          </div>
          <FAQ />
        </div>
      </div>
      <section className="relative bg-white py-24 z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 -z-10"
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        ></div>
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-secondary">
            What <span className="text-primary">Our Students</span> Say
          </h2>
          <ReviewsSlider />
        </div>
      </section>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-6 md:pt-12">
        <ContactForm />
      </div>
      <ContactBtn />
      <Footer />
    </div>
  );
};

export default App;
