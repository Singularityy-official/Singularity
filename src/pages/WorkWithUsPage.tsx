import React from "react";

export default function WorkWithUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-b from-[#1a1a26] to-[#12121a] text-white relative overflow-hidden">
      {/* Luci soffuse verdi e viola per atmosfera */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 text-transparent bg-clip-text">
          Chi sono?
        </h1>

        <div className="glass-card p-8 text-left rounded-2xl shadow-lg backdrop-blur-md bg-white/5 border border-white/10 space-y-4 text-lg leading-relaxed text-gray-200">
          <p><strong>Mi chiamo Lorenzo e ho 17 anni.</strong></p>
          <p>
            Sin da piccolo ho avuto due grandi passioni: la tecnologia e l’aiutare gli altri.
          </p>
          <p>
            Nel tempo, ho trasformato la mia passione per l’informatica, la grafica e il video editing in qualcosa di concreto, creando <strong>Singularity</strong>: non solo un progetto personale, ma una visione.
          </p>
          <p>
            Singularity nasce con uno scopo preciso: <strong>offrire servizi digitali di qualità, accessibili a tutti</strong>, e allo stesso tempo generare valore reale per chi ne ha più bisogno.
            Una parte importante delle entrate di questo progetto è destinata alla beneficenza, per aiutare persone in difficoltà e sostenere cause che contano davvero.
          </p>
          <p>
            Credo che la tecnologia non debba essere solo profitto, ma anche <strong>strumento di cambiamento, bellezza e solidarietà</strong>.
            Per questo ogni grafica che creo, ogni video che edito, ogni consiglio che offro in ambito informatico ha un significato che va oltre il lavoro stesso: è un passo verso il mio sogno più grande — fare la differenza nella vita degli altri.
          </p>
          <p>
            Attualmente opero in <strong>forma di prestazione occasionale</strong>, in piena regola con la normativa italiana, e ogni incarico è per me una nuova opportunità per dare il meglio e costruire qualcosa che abbia davvero valore.
          </p>
          <p>
            Se sei qui, grazie. Perché anche solo leggere queste parole significa far parte di qualcosa che va oltre il digitale.
            Significa credere che fare del bene, oggi, è ancora possibile.
          </p>
        </div>
      </div>
    </div>
  );
}
