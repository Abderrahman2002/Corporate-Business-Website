import { useEffect, useRef } from 'react';

const AboutUs = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 overflow-hidden">
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes growLine {
          from { width: 0; }
          to { width: 96px; }
        }

        @keyframes buttonPulse {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.1); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }

        .header-animate {
          opacity: 0;
        }
        
        .header-animate.animate-in {
          animation: slideDown 1s ease forwards;
        }
        
        .image-animate {
          opacity: 0;
        }
        
        .image-animate.animate-in {
          animation: slideLeft 1s ease forwards;
        }
        
        .content-animate {
          opacity: 0;
        }
        
        .content-animate.animate-in {
          animation: slideRight 1s ease forwards;
        }
        
        .underline-animate {
          width: 0;
        }
        
        .underline-animate.animate-in {
          animation: growLine 1s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        .button-animate {
          opacity: 0;
        }

        .button-animate.animate-in {
          animation: buttonPulse 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 1s;
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .image-wrapper img {
          transition: all 0.5s ease-in-out;
        }

        .image-wrapper:hover img {
          transform: scale(1.1) rotate(2deg);
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .image-wrapper:hover::after {
          opacity: 1;
        }
      `}</style>

      <div id="about"className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div ref={headerRef} className="header-animate">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ABOUT US
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>


            <div className="h-1 bg-blue-400 mx-auto underline-animate"></div>
            <p className="text-gray-600 mt-4">
              Welcome to our company. We specialize in delivering exceptional solutions for our clients.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Image Section */}
          <div ref={imageRef} className="md:w-2/5 image-animate">
            <div className="max-w-sm mx-auto">
              <div className="image-wrapper shadow-lg">
                <img 
                  src="./about.png" 
                  alt="Business professional"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div ref={contentRef} className="md:w-3/5 content-animate">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Company</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae 
              massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, 
              suscipit lectus.
            </p>
            <p className="text-gray-600 mb-4">
              Nulla eu neque commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus 
              consequat ultrices. Donec feugiat tempor turpis, rutrum sagittis mi venenatis at.
            </p>
            <p className="text-gray-600 mb-6">
              Praesent vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque 
              ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada metus.
            </p>
            <div ref={buttonRef} className="button-animate">
              <button className="mt-8 px-8 py-2 text-white bg-gradient-to-r from-blue-500 to-gray-500 border border-white rounded hover:from-gray-500 hover:to-blue-500 hover:text-black transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;