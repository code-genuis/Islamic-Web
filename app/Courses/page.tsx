"use client"
import React from "react";
import {
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  Download,
  Users2,
} from "lucide-react";

function Courses() {
  return (
    <>
      <div className="min-h-screen bg-up-white pt-24">
        <div className="bg-up-dark py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-4xl font-bold text-up-white md:text-5xl">
              Our Featured Courses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
              Embark on a journey of knowledge and personal growth with our
              carefully curated courses
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="relative h-64 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="McKinsey Course"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-up-golden px-4 py-2 text-sm font-semibold text-white">
                      Featured Course
                    </span>
                    <span className="rounded-full bg-up-green px-4 py-2 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                  <h2 className="mt-4 text-4xl font-bold text-white">
                    4. Taken Course By All E.
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <h3 className="mb-4 text-2xl font-bold text-up-dark">
                      Course Overview
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      The McKinsey course offers a comprehensive learning
                      experience focused on understanding key concepts and their
                      importance in building meaningful relationships and
                      leading a fulfilling life. With structured content,
                      including episodes on culture and realism, the course
                      provides valuable insights and practical knowledge.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-up-green" />
                        <div>
                          <p className="font-semibold text-up-dark">Duration</p>
                          <p className="text-gray-600">12 Weeks</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-up-green" />
                        <div>
                          <p className="font-semibold text-up-dark">Enrolled</p>
                          <p className="text-gray-600">2,500+ Students</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-up-green" />
                        <div>
                          <p className="font-semibold text-up-dark">Episodes</p>
                          <p className="text-gray-600">24 Lessons</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users2 className="h-6 w-6 text-up-green" />
                        <div>
                          <p className="font-semibold text-up-dark">
                            Group Access
                          </p>
                          <p className="text-gray-600">Workplace Group</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="mb-4 text-xl font-semibold text-up-dark">
                        Included Resources
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                          <span className="font-medium text-gray-700">
                            Course Workbook
                          </span>
                          <button className="flex items-center gap-2 text-up-green hover:text-up-green/80">
                            <Download className="h-5 w-5" />
                            <span>Download</span>
                          </button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                          <span className="font-medium text-gray-700">
                            Study Materials
                          </span>
                          <button className="flex items-center gap-2 text-up-green hover:text-up-green/80">
                            <Download className="h-5 w-5" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-6">
                    <h4 className="mb-4 text-xl font-semibold text-up-dark">
                      One-time Payment
                    </h4>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-up-green">
                        $299
                      </span>
                      <span className="text-gray-600"> USD</span>
                    </div>
                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-up-green"></div>
                        Lifetime access to all episodes
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-up-green"></div>
                        Downloadable resources
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-up-green"></div>
                        Access to workplace group
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <div className="h-2 w-2 rounded-full bg-up-green"></div>
                        Certificate of completion
                      </li>
                    </ul>
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-up-green px-6 py-3 font-semibold text-white transition-all hover:bg-up-green/90">
                      <span>Enroll Now</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Courses;
