
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenTool, Layout, FileImage, Palette, PaintBucket, Images, FileText, Presentation, BookOpen } from 'lucide-react';

const GraphicsPage = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute top-20 right-40 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Servizi di Grafica
            </h1>
            <p className="subtitle-text mb-8">
              Diamo forma alle tue idee con soluzioni grafiche creative e professionali.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Services */}
            <div>
              <h2 className="text-2xl font-bold mb-8">I nostri servizi di grafica</h2>
              
              <div className="space-y-8">
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <PenTool size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Creazione di loghi</h3>
                      <p className="text-gray-300">
                        Logo personalizzati ed unici che rispecchiano l'identità del tuo brand o della tua attività.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Palette size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Identità visiva</h3>
                      <p className="text-gray-300">
                        Sviluppo completo dell'identità del tuo brand, dai colori ai font, fino agli elementi grafici distintivi.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Layout size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Banner e grafica per social</h3>
                      <p className="text-gray-300">
                        Creazione di banner accattivanti per social media, ottimizzati per ogni piattaforma.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileImage size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Locandine e flyer</h3>
                      <p className="text-gray-300">
                        Design di locandine e volantini per eventi, promozioni o qualsiasi altra esigenza pubblicitaria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - More Services */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Altri servizi di grafica</h2>
              
              <div className="space-y-8">
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Curriculum grafici</h3>
                      <p className="text-gray-300">
                        CV visivamente accattivanti che mettono in risalto le tue competenze ed esperienze.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Presentation size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Presentazioni</h3>
                      <p className="text-gray-300">
                        Slide professionali e d'impatto per le tue presentazioni aziendali o personali.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <BookOpen size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Brochure e cataloghi</h3>
                      <p className="text-gray-300">
                        Materiale informativo elegante e ben strutturato per presentare prodotti o servizi.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Images size={20} className="text-nexrank-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mockup e icone</h3>
                      <p className="text-gray-300">
                        Creazione di mockup personalizzati e set di icone coerenti con la tua identità visiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Personalizzazione e formati</h3>
            <p className="text-gray-300 text-center mb-6">
              Tutti i nostri servizi sono personalizzabili in base alle tue esigenze specifiche.
              I lavori vengono consegnati in formati adatti sia per la stampa che per l'utilizzo digitale.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="primary-button">
                  Richiedi un preventivo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsPage;
