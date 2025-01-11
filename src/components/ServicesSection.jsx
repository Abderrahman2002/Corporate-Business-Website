import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart, Smartphone, Settings, Send, Database, Target } from 'lucide-react';
import PropTypes from 'prop-types';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ icon, title, description }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger animation for icons only
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-center p-4">
      <div
        ref={iconRef}
        className="w-16 h-16 mb-4 flex items-center justify-center bg-sky-100 rounded-full"
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // GSAP for title and description only once (fixed)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 90%',
        end: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-20 h-20 text-blue-500" />,
      title: 'Mobile App',
      description:
        'Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater',
    },
    {
      icon: <Settings className="w-20 h-20 text-blue-500" />,
      title: 'Custom App',
      description:
        'Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater',
    },
    {
      icon: <Database className="w-20 h-20 text-blue-500" />,
      title: 'E-Commerce',
      description:
        'Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum',
    },
    {
      icon: <BarChart className="w-20 h-20 text-blue-500" />,
      title: 'CMS App',
      description:
        'Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum',
    },
    {
      icon: <Send className="w-20 h-20 text-blue-500" />,
      title: 'Product Dev',
      description:
        'Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum',
    },
    {
      icon: <Target className="w-20 h-20 text-blue-500" />,
      title: 'SharePoint',
      description:
        'Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-black text-center mb-4"
          >
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>

          <p
            ref={descriptionRef}
            className="text-black text-center max-w-3xl mx-auto mb-12"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesSection;
