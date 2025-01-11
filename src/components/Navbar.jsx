import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    // GSAP animation for logo and nav links
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    gsap.fromTo(
      navLinksRef.current?.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1, delay: 0.4 }
    );
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div ref={logoRef} className="text-2xl font-bold flex items-center">
          <img src="./logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Navbar Links */}
        <div
          ref={navLinksRef}
          className={`md:flex hidden space-x-8`}
        >
          <a href="#home" className="hover:text-blue-400">HOME</a>
          <a href="#products" className="hover:text-blue-400">PRODUCTS</a>
          <a href="#services" className="hover:text-blue-400">SERVICES</a>
          <a href="#about" className="hover:text-blue-400">ABOUT</a>
          <a href="#portfolio" className="hover:text-blue-400">PORTFOLIO</a>
          <a href="#team" className="hover:text-blue-400">TEAM</a>
          <a href="#pricing" className="hover:text-blue-400">PRICING</a>
          <a href="#contact" className="hover:text-blue-400">CONTACT</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-blue-400" onClick={closeMenu}>HOME</a>
          <a href="#products" className="block hover:text-blue-400" onClick={closeMenu}>PRODUCTS</a>
          <a href="#services" className="block hover:text-blue-400" onClick={closeMenu}>SERVICES</a>
          <a href="#about" className="block hover:text-blue-400" onClick={closeMenu}>ABOUT</a>
          <a href="#portfolio" className="block hover:text-blue-400" onClick={closeMenu}>PORTFOLIO</a>
          <a href="#team" className="block hover:text-blue-400" onClick={closeMenu}>TEAM</a>
          <a href="#pricing" className="block hover:text-blue-400" onClick={closeMenu}>PRICING</a>
          <a href="#contact" className="block hover:text-blue-400" onClick={closeMenu}>CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
