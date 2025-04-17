import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Grafica', path: '/graphics' },
    { name: 'Informatica', path: '/it' },
    { name: 'Video Editing', path: '/video-editing' },
    { name: 'Impegno Sociale', path: '/social-commitment' },
    { name: 'Contatti', path: '/contact' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  const renderNavLink = (link: any) => {
    return (
      <Link 
        key={link.name} 
        to={link.path} 
        className={isActiveLink(link.path)}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nexrank-dark/80 backdrop-blur-md py-2 md:py-3 shadow-md' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center space-x-2 cursor-pointer"
              aria-label="Go to Home"
            >
              <img 
                src="/lovable-uploads/355f7e8e-eadc-4c20-b8d3-a150790a2885.png" 
                alt="Singularity Logo" 
                className="h-10 md:h-12 w-auto"
              />
              <span className="text-white font-bold text-lg md:text-xl">Singularity</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(renderNavLink)}
          </nav>

          <div className="hidden md:block">
            <Link to="/work-with-us">
              <Button className="primary-button animate-pulse-slow">
                Chi Sono?
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-nexrank-dark-blue/95 backdrop-blur-lg p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${isActiveLink(link.path)} py-2 px-4 block rounded-lg ${
                  location.pathname === link.path ? 'bg-nexrank-purple/20' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/work-with-us"
              className="primary-button w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Sono?
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
