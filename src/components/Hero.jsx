import React from 'react';
import { Button } from "@/components/ui/button";
import man from "../assets/man.png";

import { forwardRef } from 'react';
const Hero = forwardRef((props,ref) => {
  const scrollToProjects = () => {
    if (props.refs && props.refs.projects && props.refs.projects.current) {
      props.refs.projects.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div ref={ref} className="min-h-[100vh] md:min-h-[90vh] flex items-center  max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20" id="home">
      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:max-w-2xl">
        <div className="text-cyan-200/80 text-base md:text-lg font-medium">
          Hi, my name is
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Biraj Baral.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">
          MERN Stack Developer
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I'm a Computer Engineering student with a passion for web development and 
          problem solving. Specializing in the MERN stack, I combine my strong DSA knowledge 
          with practical development skills to build efficient and scalable applications. 
          Currently focused on expanding my knowledge in{" "}
          <span className="text-cyan-200">
            full-stack development
          </span>{" "}
          while pursuing my engineering degree.
        </p>

        <div className="pt-2 md:pt-4">
          <Button 
            className="bg-transparent hover:bg-cyan-200/10 text-cyan-200 border-2 border-cyan-200/80 px-4 md:px-6 py-2 md:py-4 text-base md:text-lg transition-all duration-300"
            variant="outline"
            onClick={scrollToProjects}
          >
            Check out my projects!
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Hero;