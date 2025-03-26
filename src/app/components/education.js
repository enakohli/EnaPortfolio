"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import paths from '../paths';

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        entry.target.classList.remove('opacity-0');
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
        <div className="bg-gray-900 text-white py-20 w-screen font-geist" id="education">
            <div
                ref={sectionRef}
                className="max-w-4xl mx-auto bg-gray-700 shadow-md rounded-lg p-8 opacity-0 transition duration-500 ease-in-out transform hover:scale-105"
            >
                <h1 className="text-4xl font-geist mb-8 text-center transition duration-500 ease-in-out transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r bg-gray-300">
                    Education
                </h1>
                <div className="space-y-6">
                    <div className="p-6 border-b border-gray-600 grid grid-cols-3 gap-4 items-center transition duration-500 ease-in-out transform hover:bg-gray-600 hover:shadow-xl rounded-md">
                        <Image
                            src={paths.university}
                            alt="UWaterloo Logo"
                            width={200}
                            height={200}
                            className="col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div className="col-span-2">
                            <h2 className="text-2xl font-semibold text-white">Bachelor of Computer Science</h2>
                            <p className="text-gray-300">Class of 2024 - University of Waterloo</p>
                            <p className="text-gray-400 mt-2">
                                <span className="font-medium text-indigo-400">Key Highlights:</span> 80%+ Cumulative Average, President's Scholarship of Distinction
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;