
import React from 'react';
import { ArrowRight, Pen, Monitor, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="section-container">
          <div className="absolute top-20 right-10 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Coloriamo l'universo<br />
              partendo dal suo punto più oscuro
            </h1>
            
            <p className="subtitle-text mb-8">
              Singularity offre servizi professionali di alta qualità a prezzi accessibili nel campo dell'informatica, grafica e video editing.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="primary-button flex items-center gap-2 text-lg">
                  Contattaci <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/graphics">
                <Button variant="outline" className="text-nexrank-light border-nexrank-light/30 hover:bg-nexrank-light/10 hover:border-nexrank-light hover:text-white text-lg">
                  Scopri i nostri servizi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="subtitle-text">
              Offriamo servizi professionali di alta qualità a costi accessibili.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Pen} 
              title="Grafica" 
              description="Loghi, identità visiva, banner per social media, locandine, curriculum e altro ancora, curati nei minimi dettagli." 
            />
            <FeatureCard 
              icon={Monitor} 
              title="Informatica" 
              description="Consulenza e assistenza informatica, risoluzione problemi, supporto remoto e in loco per tutte le tue esigenze tecnologiche." 
            />
            <FeatureCard 
              icon={Video} 
              title="Video Editing" 
              description="Montaggio video professionale per YouTube, vlog, eventi, social media, con transizioni, titoli e musica di qualità." 
            />
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Perché scegliere Singularity?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div className="glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-nexrank-purple text-xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Qualità</h4>
                <p className="text-gray-300">Servizi professionali con cura per ogni dettaglio</p>
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-nexrank-purple text-xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Accessibilità</h4>
                <p className="text-gray-300">Prezzi competitivi per rendere l'eccellenza alla portata di tutti</p>
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-nexrank-purple text-xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Personalizzazione</h4>
                <p className="text-gray-300">Soluzioni su misura per le tue esigenze specifiche</p>
              </div>
              
              <div className="glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-nexrank-purple text-xl font-bold">4</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Assistenza</h4>
                <p className="text-gray-300">Supporto costante e disponibilità per ogni necessità</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
        <div className="section-container relative z-10">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a dare vita ai tuoi progetti?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Scopri come possiamo aiutarti a realizzare le tue idee con professionalità e creatività.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/graphics">
                <Button className="primary-button text-lg px-6 py-5">
                  Servizi di grafica
                </Button>
              </Link>
              <Link to="/it">
                <Button className="primary-button text-lg px-6 py-5">
                  Servizi informatici
                </Button>
              </Link>
              <Link to="/video-editing">
                <Button className="primary-button text-lg px-6 py-5">
                  Servizi di video editing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
