import React from 'react';
import myPic from '../assests/mypic.png';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-white-300">
      <div className="mb-4">
        <img
          src={myPic}
          alt="My pic"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-slate-400">Mohit Singh Rawat</h1>
        <p className="text-sm text-gray-600">
          Website Developer and Cybersecurity Enthusiast
        </p>
      </div>
    </div>
  );
};

export default About;
