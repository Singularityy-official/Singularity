
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Video, Youtube, Camera, Music, Scissors, FileText } from 'lucide-react';

const VideoEditingPage = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute top-20 right-40 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Servizi di Video Editing
            </h1>
            <p className="subtitle-text mb-4">
              Trasforma le tue riprese in contenuti video professionali e coinvolgenti.
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto italic">
              Servizio offerto in forma occasionale. Dopo ogni collaborazione, non sarà possibile richiedere ulteriori lavori per un certo periodo di tempo, nel rispetto della normativa vigente (art. 2222 c.c.).
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">I nostri servizi di video editing</h2>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Youtube size={20} className="text-nexrank-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Video per YouTube</h3>
                  <p className="text-gray-300">
                    Editing professionale per video YouTube che catturano l'attenzione e mantengono alto l'engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera size={20} className="text-nexrank-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Vlog e contenuti personali</h3>
                  <p className="text-gray-300">
                    Montaggio di vlog e contenuti personali con un tocco professionale che mantiene l'autenticità.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Video size={20} className="text-nexrank-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Video per eventi</h3>
                  <p className="text-gray-300">
                    Editing di video per matrimoni, compleanni, cerimonie e altri eventi speciali.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText size={20} className="text-nexrank-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Video per social media</h3>
                  <p className="text-gray-300">
                    Creazione di video ottimizzati per le diverse piattaforme social, con formati e durate specifiche.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Cosa includiamo</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-4 hover-lift">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Music size={16} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Musica di sottofondo</h4>
                      <p className="text-gray-400 text-sm">Selezione di brani adatti al tuo contenuto</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 hover-lift">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Scissors size={16} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tagli professionali</h4>
                      <p className="text-gray-400 text-sm">Editing preciso per un ritmo ottimale</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 hover-lift">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Video size={16} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Transizioni</h4>
                      <p className="text-gray-400 text-sm">Transizioni fluide tra le scene</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 hover-lift">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <FileText size={16} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Titoli e testi</h4>
                      <p className="text-gray-400 text-sm">Aggiunta di titoli, sottotitoli e testi animati</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="primary-button">
                  Richiedi informazioni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;

