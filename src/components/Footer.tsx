
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  return (
    <footer className="bg-nexrank-dark-blue/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center space-x-2 cursor-pointer"
              aria-label="Go to Home"
            >
              <img 
                src="/lovable-uploads/355f7e8e-eadc-4c20-b8d3-a150790a2885.png" 
                alt="Singularity Logo" 
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl">Singularity</span>
            </button>
            <p className="mt-4 text-gray-400 text-sm">
              Coloriamo l'universo partendo dal suo punto più oscuro
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-nexrank-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexrank-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexrank-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nexrank-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><Link to="/graphics" className="text-gray-400 hover:text-nexrank-purple transition-colors">Grafica</Link></li>
              <li><Link to="/it" className="text-gray-400 hover:text-nexrank-purple transition-colors">Informatica</Link></li>
              <li><Link to="/video-editing" className="text-gray-400 hover:text-nexrank-purple transition-colors">Video Editing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li><Link to="/social-commitment" className="text-gray-400 hover:text-nexrank-purple transition-colors">Impegno Sociale</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-nexrank-purple transition-colors">Contatti</Link></li>
              <li><Link to="/work-with-us" className="text-gray-400 hover:text-nexrank-purple transition-colors">Lavora con noi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span>+39 3488664662</span>
              </li>
              <li>
                <a href="mailto:info.singularityy@gmail.com" className="text-gray-400 hover:text-nexrank-purple transition-colors">
                  info.singularityy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm space-y-2">
            <p>© {new Date().getFullYear()} Singularity. Tutti i diritti riservati.</p>
            <p className="text-xs">Attività svolta in forma saltuaria e occasionale ai sensi dell'art. 2222 c.c., senza obbligo di partita IVA. Per informazioni su collaborazioni occasionali, contattami</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="mailto:info.singularityy@gmail.com" className="text-gray-400 hover:text-nexrank-purple transition-colors flex items-center">
              <Mail size={18} className="mr-2" /> info.singularityy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
