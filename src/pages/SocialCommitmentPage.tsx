import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HandCoins, Heart, Leaf, Recycle, Users, HandHeart, TreePine } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const SocialCommitmentPage = () => {
  const handleDonationClick = () => {
    toast("Grazie per voler supportare la nostra missione! Il link PayPal sarà presto disponibile.", {
      description: "Donazioni",
    });
    // In futuro, sostituiremo questo con il link diretto a PayPal
  };

  return (
    <div className="pt-28">
      {/* Hero Section - Green Theme */}
      <section className="py-20 relative">
        <div className="absolute top-20 right-40 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-40 w-80 h-80 bg-green-700/10 rounded-full blur-3xl" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #fff 0%, #4ade80 100%)' }}>
              Impegno Sociale e Ambientale
            </h1>
            <p className="subtitle-text mb-8">
              Il nostro contributo per un futuro migliore e più sostenibile.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Social Initiatives */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mr-4">
                  <Heart size={24} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Iniziative benefiche</h2>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-3">Supporto alle persone bisognose</h3>
                  <p className="text-gray-300 mb-4">
                    Destiniamo parte dei nostri profitti all'acquisto diretto di beni di prima necessità che doniamo personalmente a persone in difficoltà economiche e sociali nella nostra comunità.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <HandHeart size={16} className="text-green-500" />
                    <span>Donazioni dirette di cibo e beni essenziali</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-3">Tecnologia per tutti</h3>
                  <p className="text-gray-300 mb-4">
                    Offriamo servizi gratuiti di assistenza informatica e formazione tecnologica di base per anziani e persone con difficoltà economiche.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users size={16} className="text-green-500" />
                    <span>Assistenza tecnologica gratuita per anziani e persone in difficoltà, basta contattarci.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Environmental Initiatives */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mr-4">
                  <Leaf size={24} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold">Impegno ambientale</h2>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-3">Riduzione dell'impatto ambientale</h3>
                  <p className="text-gray-300 mb-4">
                    Adottiamo pratiche di lavoro sostenibili, riducendo al minimo gli sprechi e optando per soluzioni digitali quando possibile.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Recycle size={16} className="text-green-500" />
                    <span>Promuoviamo uno stile di lavoro più green, con piccoli gesti quotidiani.

</span>
                  </div>
                </div>
                
                <div className="glass-card p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-lg mb-3">Progetto riforestazione</h3>
                  <p className="text-gray-300 mb-4">
                    Stiamo pianificando un progetto di riforestazione in collaborazione con associazioni ambientaliste. Non appena avremo le risorse necessarie, inizieremo a piantare alberi per contribuire alla rigenerazione di aree degradate.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <TreePine size={16} className="text-green-500" />
                    <span>Progetto in fase di sviluppo per un futuro più verde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Centered Button */}
          <div className="mt-12 text-center">
            <Button 
              onClick={handleDonationClick}
              className="primary-button mx-auto"
              style={{background: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'}}
            >
              <HandHeart className="mr-2" /> Sostieni il Nostro Impegno
            </Button>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-20 bg-gradient-to-br from-green-900/40 to-nexrank-dark-blue/50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-green-400 mb-6">"</div>
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              Crediamo in un futuro dove la tecnologia non lascia indietro nessuno. E lo costruiamo ogni giorno, insieme.
            </p>
            <div className="text-6xl text-green-400 rotate-180">"</div>
          </div>
        </div>
      </section>

      {/* Impact Report */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Il nostro impatto</h2>
            <p className="subtitle-text">
              Risultati concreti delle nostre iniziative sociali e ambientali.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center border-t-4 border-green-500">
              <div className="text-4xl font-bold text-green-500 mb-2">7+</div>
              <h3 className="text-xl font-semibold mb-2">Persone assistite</h3>
              <p className="text-gray-300">
                Anziani e persone in difficoltà che hanno ricevuto supporto tecnologico gratuito.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center border-t-4 border-green-500">
              <div className="text-4xl font-bold text-green-500 mb-2">12+</div>
              <h3 className="text-xl font-semibold mb-2">Ore di volontariato</h3>
              <p className="text-gray-300">
                Tempo dedicato a iniziative sociali e formazione gratuita nell'ultimo anno.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center border-t-4 border-green-500">
              <div className="text-4xl font-bold text-green-500 mb-2">30%</div>
              <h3 className="text-xl font-semibold mb-2">Profitti donati</h3>
              <p className="text-gray-300">
                Diamo il 30% dei nostri guadagni alle persone bisognose ed all'ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-green-900/20">
        <div className="section-container">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Unisciti a noi</h2>
            <p className="text-xl text-gray-300 mb-8">
              Scegliendo Singularity, non solo ottieni servizi di qualità, ma contribuisci anche a fare la differenza nel nostro pianeta e nella nostra comunità.
            </p>
            <Link to="/contact">
              <Button className="primary-button" style={{background: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'}}>
                Scopri come collaborare
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nuova sezione Donazioni */}
      <section id="donazioni" className="py-16 bg-green-900/20">
        <div className="section-container">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <HandCoins size={48} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Sostieni il Nostro Impegno</h2>
            <p className="text-xl text-gray-300 mb-4">
              Ogni donazione contribuisce a realizzare progetti sociali e ambientali. 
              Insieme, possiamo fare la differenza.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Il 100% delle donazioni sarà utilizzato esclusivamente per aiutare le persone bisognose e il pianeta, 
              garantendo la massima trasparenza nel loro utilizzo.
            </p>
            <Button 
              onClick={handleDonationClick}
              className="primary-button mx-auto"
              style={{background: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'}}
            >
              <HandHeart className="mr-2" /> Dona Ora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialCommitmentPage;
