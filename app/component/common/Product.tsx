"use client";
import React from "react";
import bgImage from "@/app/assets/img/bg.webp";
import { Clock, Users, BookOpen, ArrowRight } from "lucide-react";

const Product = () => {
  return (
    <section className="relative bg-white py-24 z-10">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 -z-10"
        style={{
          backgroundImage: `url(${bgImage.src})`
        }}
      ></div> 
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-secondary">
          Featured <span className="text-primary">Course</span>
        </h2>
        <div className="group mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 shadow-xl transition-all duration-300 border-primary border">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-64 w-full md:h-auto md:w-2/5">
              <img
                src="https://instagram.flhe7-2.fna.fbcdn.net/v/t39.30808-6/473127000_453029527860675_2531541419818123321_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNjM4eDIwNDguc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flhe7-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AGViBYcn3cfLWqVhd5dJddKFTCZ1YpQc8-QbGMWg5R-JGAQTajHLr07ccVqHF1k-TM&_nc_ohc=6QKo-laSrrsQ7kNvgGFFvrC&_nc_gid=561fdafa261a4c7eb00a9d1882675a99&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzM4MzczMzAzNTU2NTQ4NzY0Nw%3D%3D.3-ccb7-5&oh=00_AYBVzbzMDlr0RmGUcmmtRL0Ql-hrj0xD986GVlRi3mzJhw&oe=67C39592&_nc_sid=7a9f4b"
                alt="Fundamentals of Tajweed"
                className="h-full w-full object-cover transition-all duration-500 [filter:sepia(0.5)_grayscale(0.2)_brightness(0.9)_contrast(1.2)] group-hover:[filter:none]"
              />
              <div className="absolute top-4 left-4 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white">
                Most Popular
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-secondary">
                  Fundamentals of Tajweed
                </h3>
                <p className="mb-6 text-gray-600">
                  Master the art of Quranic recitation with proper pronunciation
                  and rules. This comprehensive course covers all essential
                  aspects of Tajweed, from basic principles to advanced
                  techniques.
                </p>

                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-black">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>12 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <Users className="h-5 w-5 text-primary" />
                    <span>2,500+ Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>24 Lessons</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Course Fee</p>
                  <p className="text-2xl font-bold text-primary">$199</p>
                </div>
                <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-gray-50 hover:text-black hover:border-primary hover:border">
                  <span>Enroll Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
