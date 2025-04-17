import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Cpu, HardDrive, Wifi, Printer, Video, Headphones, ShoppingBag } from 'lucide-react';

const ITPage = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute top-20 right-40 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Servizi Informatici
            </h1>
            <p className="subtitle-text mb-8">
              Assistenza e consulenza informatica su misura per le tue esigenze.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Services */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">I nostri servizi informatici</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Risoluzione problemi software</h3>
                  <p className="text-gray-300 text-center">
                    Risoluzione di problemi con software, sistemi operativi e applicazioni.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Rimozione virus e malware</h3>
                  <p className="text-gray-300 text-center">
                    Pulizia del sistema da virus, malware e software indesiderato.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Cpu size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Installazione software</h3>
                  <p className="text-gray-300 text-center">
                    Installazione e configurazione di software, driver e aggiornamenti di sistema.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <HardDrive size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Formattazione e reinstallazione</h3>
                  <p className="text-gray-300 text-center">
                    Formattazione e reinstallazione completa del sistema operativo.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Wifi size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Configurazione reti Wi-Fi</h3>
                  <p className="text-gray-300 text-center">
                    Configurazione e ottimizzazione di reti Wi-Fi domestiche e aziendali.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Printer size={20} className="text-nexrank-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Configurazione stampanti</h3>
                  <p className="text-gray-300 text-center">
                    Installazione e configurazione di stampanti e periferiche.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Support Information */}
            <div>
              <div className="glass-card p-8 sticky top-28">
                <h3 className="text-xl font-bold mb-6">Supporto su misura</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Video size={18} className="text-nexrank-purple mr-2" /> Supporto da remoto
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Assistenza a distanza per risolvere problemi senza necessità di intervento fisico.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Headphones size={18} className="text-nexrank-purple mr-2" /> Supporto in loco
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Intervento diretto presso la tua abitazione o ufficio quando necessario.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <ShoppingBag size={18} className="text-nexrank-purple mr-2" /> Consulenza acquisto PC
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Consigli e supporto nella scelta del computer più adatto alle tue esigenze.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-300 text-sm mb-4">
                      Un impegno costante per fornire assistenza chiara e trasparente, comprensibile anche per chi ha poca familiarità con la tecnologia.
                    </p>
                    <Link to="/contact">
                      <Button className="primary-button w-full">
                        Richiedi assistenza
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-nexrank-dark-blue/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Il nostro approccio</h2>
            <p className="subtitle-text">
              Assistenza informatica semplice e comprensibile per tutti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Linguaggio semplice</h3>
              <p className="text-gray-300">
                Spieghiamo i problemi e le soluzioni in modo chiaro, evitando termini tecnici complicati.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Trasparenza</h3>
              <p className="text-gray-300">
                Preventivi chiari e dettagliati, senza costi nascosti o sorprese.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Supporto mirato</h3>
              <p className="text-gray-300">
                Assistenza dedicata fino al completamento del tuo progetto, garantendo la piena soddisfazione.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITPage;
