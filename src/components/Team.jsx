  import { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

  gsap.registerPlugin(ScrollTrigger);

  const Team = () => {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef([]);

    const team = [
      { 
        name: 'John Doe', 
        role: 'Founder & CEO', 
        description: 'Pellentesque elementum non nisi eu auctor.',
        social: {
          twitter: 'https://twitter.com',
          linkedin: 'https://linkedin.com',
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
        },
        image: './team/01.jpg',
      },
      { 
        name: 'Armani Krist', 
        role: 'Manager & Designer', 
        description: 'Quisque ac magna auctor, congue eros.',
        social: {
          twitter: 'https://twitter.com',
          linkedin: 'https://linkedin.com',
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
        },
        image: './team/02.jpg',
      },
      { 
        name: 'Micellir Faeny', 
        role: 'Developer & Designer', 
        description: 'Aenean fermentum justo vitae.',
        social: {
          twitter: 'https://twitter.com',
          linkedin: 'https://linkedin.com',
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
        },
        image: './team/03.jpg',
      },
      { 
        name: 'Kimten Lendy', 
        role: 'Developer & Designer', 
        description: 'Vivamus porttitor eros id euismod.',
        social: {
          twitter: 'https://twitter.com',
          linkedin: 'https://linkedin.com',
          facebook: 'https://facebook.com',
          instagram: 'https://instagram.com',
        },
        image: './team/04.jpg',
      },
    ];

    useEffect(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 80%',
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
    }, []);

    return (
      <section id="team" className="py-16 px-4 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 ref={titleRef} className="text-3xl font-bold text-center mb-2">
            OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>

          <p ref={descRef} className="text-gray-600 text-center mb-12">
            Meet the people behind our success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white p-6 text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      />
                  </div>
                  <div className="flex justify-center space-x-4">
    <a
      href={member.social.twitter}
      className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
    >
      <Twitter size={20} />
    </a>
    <a
      href={member.social.linkedin}
      className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
    >
      <Linkedin size={20} />
    </a>
    <a
      href={member.social.facebook}
      className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
    >
      <Facebook size={20} />
    </a>
    <a
      href={member.social.instagram}
      className="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
    >
      <Instagram size={20} />
    </a>
  </div>

                </div>
                <h3 className="font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Team;
