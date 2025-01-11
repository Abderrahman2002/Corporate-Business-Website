import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Animate the title, description, and buttons when the component mounts
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4, stagger: 0.2 }
    );
  }, []);

  return (
    <div id="home" className="hero bg-cover bg-center relative w-full h-screen">
      {/* Background Image */}
      <div className="w-full h-full relative">
        <img
          src="./banner/bg1.png"
          alt="Corporate team working"
          className="w-full h-full object-cover grayscale opacity-100 z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 z-10" />
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-xl text-center">
            <h1 ref={titleRef} className="text-6xl font-bold text-white mb-6">
              Super Awesome Corporate Business
            </h1>
            <p ref={descriptionRef} className="text-white mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore.
            </p>
            <div ref={buttonsRef} className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-gray-500 text-white px-6 py-3 rounded hover:from-blue-600 hover:to-gray-600 transition duration-300 mr-4">
                Learn More
              </button>
              <button className="bg-gradient-to-r from-gray-500 to-black text-white px-6 py-3 rounded border border-gray-400 hover:from-gray-600 hover:to-black hover:text-gray-200 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
