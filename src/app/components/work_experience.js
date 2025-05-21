"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import paths from "../paths";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "DoctorCare Inc.",
      logo: paths.doctorcare,
      date: "May 2024 - Present",
      location: "Toronto, ON, Canada",
      achievements: [
        "Partnering with a customer-focused team to design and deploy full-stack features, including generating billing reports, integrating consumer-focused data with Salesforce, and provisioning AWS resources such as EC2 instances.",
        "Developing and optimizing backend systems by creating scalable solutions for dependency management, custom configurations, and workflow automation, including designing and implementing an OCR-based solution to parse billing day sheets, streamlining data extraction and improving operational efficiency.",
        "Implementing new application features using Python (Django framework), Ruby on Rails, and PostgreSQL to enhance functionality and system performance.",
      ],
    },
    {
      title: "Software Engineer",
      company: "OPENLANE",
      logo: paths.openlane,
      date: "September 2023 - December 2023",
      location: "Carmel, Indiana, USA",
      achievements: [
        "Collaborating with a customer-focused team to deploy full-stack features like sending real-time vehicle auto bid updates to the backend, optimizing and testing functions via AWS Lambda and CloudWatch, and enhancing UI for vehicle watchlist.",
        "Developing new features for the OPENLANE Marketplace, including the creation of a new vehicle description page, filtering through the watchlist API, and adding in Segment events for customer data collection - utilizing tools such as React JS, TypeScript, StencilJS, Postgres, ADO, and JEST",
      ],
    },
    {
      title: "Software Developer",
      company: "Wonolo Inc.",
      logo: paths.wonolo,
      date: "May 2023 - August 2023",
      location: "San Francisco, California, USA",
      achievements: [
        "Delivering client-centric full-stack features in an agile working environment, such as integrating a no code platform, deprecating a column directly impacting customers, introducing W2 and 1099 jobs in the customer portal, and providing the capability for deductions and garnishments to be automatically applied to worker pending checks during a payroll cycle etc.",
        "Collaborating on several features on the Customer and Admin portals, directly impacting customers, utilizing tools like React JS, React Native, JS, GraphQL, Ruby on Rails, Postgres, JEST, and Zeal API on the Tech Demand team.",
      ],
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div
      className="bg-gray-900 text-white py-20 w-screen font-geist"
      id="experience"
    >
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto bg-gray-700 shadow-md rounded-lg p-8 opacity-0 transition-opacity duration-700 ease-in-out"
      >
        <h1 className="text-4xl font-geist mb-8 text-center text-white">
          Work Experience
        </h1>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border-b border-gray-600 grid grid-cols-3 items-start rounded-md"
            >
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={150}
                height={150}
                className="col-span-1 object-contain"
              />
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-white">
                  {exp.title}
                </h2>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400">
                  {exp.date} — {exp.location}
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-200 text-base marker:text-indigo-400">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
