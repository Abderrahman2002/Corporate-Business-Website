import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Settings, Database, BarChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import PropTypes from 'prop-types';

const ProductCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="text-white">
      <Icon className="w-8 h-8 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const ProductSection = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const leftContentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      }
    });

    // Header animations
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    );

    // Left content animations
    gsap.fromTo(leftContentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
        }
      }
    );
  }, []);

  const products = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater."
    },
    {
      icon: Settings,
      title: "Custom App",
      description: "Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater."
    },
    {
      icon: Database,
      title: "E-Commerce",
      description: "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    },
    {
      icon: BarChart,
      title: "CMS App",
      description: "Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum."
    }
  ];

  return (
    <section id="products" className="relative bg-blue-400 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 transform -skew-y-6 translate-y-32" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl font-bold text-white text-center mb-4">
          OUR PRODUCT
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
        <p ref={descRef} className="text-white text-center max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
          semper aliquam quis mattis quam.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div ref={leftContentRef} className="md:w-1/2">
            <div className="text-white space-y-6">
              <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
semper aliquam quis mattis quam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
semper aliquam quis mattis quam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</>
            </div>
            <button ref={buttonRef} className="mt-8 px-8 py-2 text-white bg-gradient-to-r from-blue-500 to-gray-500 border border-white rounded hover:from-gray-500 hover:to-blue-500 hover:text-black transition-colors">
              Download Now
            </button>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductSection;

