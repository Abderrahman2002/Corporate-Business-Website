import { useState, useRef, useEffect } from 'react';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All Works');
  const [animated, setAnimated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  const filters = ['All Works', 'Designing', 'Mobile App', 'Development'];

  const works = [
    { id: 1, title: 'Project Title 1', image: './portfolio/01.jpg', category: 'Web Design' },
    { id: 2, title: 'Lorem Ipsum', image: './portfolio/02.jpg', category: 'Designing' },
    { id: 3, title: 'Project Name', image: './portfolio/03.jpg', category: 'Mobile App', description: 'Some description.' },
    { id: 4, title: 'Lorem Ipsum', image: './portfolio/04.jpg', category: 'Development' },
    { id: 5, title: 'Lorem Ipsum', image: './portfolio/05.jpg', category: 'Mobile App' },
    { id: 6, title: 'Lorem Ipsum', image: './portfolio/06.jpg', category: 'Designing' },
    { id: 7, title: 'Lorem Ipsum', image: './portfolio/07.jpg', category: 'Development' },
    { id: 8, title: 'Lorem Ipsum', image: './portfolio/08.jpg', category: 'Mobile App' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to handle the click on the eye icon
  const handleEyeClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .work-item {
          position: relative;
          overflow: hidden;
        }

        .work-item img {
          transition: transform 0.5s ease;
        }

        .work-item:hover img {
          transform: scale(1.1);
        }

        .work-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .work-item:hover .work-overlay {
          transform: translateY(0);
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal img {
          max-width: 90%;
          max-height: 80%;
          object-fit: contain;
        }

        .modal .close {
          position: absolute;
          top: 10px;
          right: 10px;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }
      `}</style>

      <div id="portfolio" className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 ${animated ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR WORKS</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${animated ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeFilter === filter ? 'bg-blue-400 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works
            .filter(work => activeFilter === 'All Works' || work.category === activeFilter)
            .map((work, index) => (
              <div
                key={work.id}
                className={`work-item rounded-lg shadow-lg relative overflow-hidden ${animated ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${0.2 * (index + 3)}s` }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {/* Eye Icon Overlay */}
                <div
                  onClick={() => handleEyeClick(work.image)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer"
                >
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <div className="work-overlay rounded-b-lg">
                  <h3 className="text-white text-lg font-semibold">{work.title}</h3>
                  {work.description && (
                    <p className="text-gray-300 text-sm mt-1">{work.description}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <img src={selectedImage} alt="Enlarged" />
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
        </div>
      )}
    </div>
  );
};

export default OurWorks;
