import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="text-xl mt-4">Frontend Developer | UI/UX Designer | Freelancer</p>
      <button className="mt-6 px-6 py-2 bg-white text-black rounded-full shadow-md hover:bg-gray-300">
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
