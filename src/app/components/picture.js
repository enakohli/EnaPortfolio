import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import paths from '../paths';

const Picture = () => {
    return (
        <div className="bg-indigo-950 text-gray-300 py-20 w-screen">
            <div className="container mx-auto px-6 text-center">
                <Image src={paths.me} alt="Ena" height={128} width={128} className="mx-auto mb-4 rounded-full object-cover" />
                <h1 className="text-5xl mb-4 typing-effect mx-auto font-geist">Ena Kohli</h1>

                <div className="flex justify-center gap-2 mt-2">
                    <a href="https://github.com/enakohli/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/enakohli/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
                        <FaLinkedin size={32} />
                    </a>
                </div>

                <div className="mt-8">
                    <a 
                        href={paths.resume} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-indigo-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                        View Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Picture;