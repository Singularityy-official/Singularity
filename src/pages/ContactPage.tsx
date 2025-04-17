import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Loader2, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'grafica'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Make sure phone is a string and properly formatted
      const formattedPhone = formData.phone || "Non specificato";
      
      // Format company field - use provided value or default text
      const companyInfo = formData.company.trim() ? formData.company : "Non specificata";
      
      // Using EmailJS to send the email
      const templateParams = {
        to_email: 'info.singularityy@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: `Richiesta di contatto: ${formData.interest}`,
        company: companyInfo,
        azienda: companyInfo, // Italian variable name for company
        user_company: companyInfo, // Another variation for company
        business: companyInfo, // Additional company name variable
        organization: companyInfo, // Additional company name variable
        company_name: companyInfo, // Additional company name variable with underscore
        nome_azienda: companyInfo, // Italian variation with underscore
        ragione_sociale: companyInfo, // Italian business name
        phone: formattedPhone,
        name: formData.name,  // Explicitly adding name to ensure it's in the email
        interest: formData.interest, // Adding interest to include in the email
        user_phone: formattedPhone, // Adding a different variable name to ensure phone is included
        telefono: formattedPhone, // Adding Italian variable name for phone
        email: formData.email, // Adding explicit email field
        reply_to: formData.email, // Adding reply_to field which is often used by email services
        user_email: formData.email, // Adding another variant of the email field
        email_utente: formData.email, // Adding Italian variant of the email field
      };
      
      console.log("Sending email with params:", templateParams);
      
      // EmailJS service details
      const serviceID = 'service_gq3q0im'; 
      const templateID = 'template_054g8xt'; 
      const userID = 'yIkPy6kgvBrQUOeJy'; 
      
      const result = await emailjs.send(serviceID, templateID, templateParams, userID);
      
      console.log('Email sent successfully:', result.text);
      setIsLoading(false);
      setFormSubmitted(true);
      toast.success("Messaggio inviato con successo!");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'grafica'
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsLoading(false);
      toast.error("Errore nell'invio del messaggio. Riprova più tardi.");
    }
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute top-20 right-10 md:right-40 w-40 md:w-72 h-40 md:h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text text-4xl md:text-7xl mb-4 md:mb-6">
              Contattaci
            </h1>
            <p className="subtitle-text text-lg md:text-2xl mb-6 md:mb-8 px-4 md:px-0">
              Siamo a tua disposizione per qualsiasi domanda o richiesta. Il nostro team sarà felice di aiutarti.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 md:py-16">
        <div className="section-container px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Informazioni di contatto</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-nexrank-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefono</h3>
                    <p className="text-gray-300 mb-1">Chiamaci per qualsiasi informazione:</p>
                    <a href="tel:+393488664662" className="text-nexrank-purple hover:underline">+39 348 8664662</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-nexrank-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300 mb-1">Scrivici per qualsiasi richiesta:</p>
                    <a href="mailto:info.singularityy@gmail.com" className="text-nexrank-purple hover:underline">info.singularityy@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare size={20} className="text-nexrank-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <p className="text-gray-300 mb-2">
                      Seguici sui nostri canali social:
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-nexrank-purple/20 flex items-center justify-center hover:bg-nexrank-purple/40 transition-colors">
                        <Facebook size={18} className="text-nexrank-purple" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-nexrank-purple/20 flex items-center justify-center hover:bg-nexrank-purple/40 transition-colors">
                        <Instagram size={18} className="text-nexrank-purple" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-nexrank-purple/20 flex items-center justify-center hover:bg-nexrank-purple/40 transition-colors">
                        <Twitter size={18} className="text-nexrank-purple" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 md:p-6">
                  <h3 className="font-semibold mb-2 md:mb-3">Orari di disponibilità</h3>
                  <p className="text-gray-300 mb-1">
                    Siamo disponibili dal lunedì al venerdì, dalle 9:00 alle 18:00.
                  </p>
                  <p className="text-gray-300">
                    Rispondiamo alle email entro 24 ore lavorative.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="glass-card p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Inviaci un messaggio</h2>
                
                {formSubmitted ? (
                  <div className="text-center py-6 md:py-8">
                    <div className="w-16 h-16 bg-nexrank-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-nexrank-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Messaggio inviato!</h3>
                    <p className="text-gray-300 mb-6">
                      Grazie per averci contattato. Ti risponderemo il prima possibile.
                    </p>
                    <Button 
                      className="primary-button"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-white mb-1">Nome completo *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-white mb-1">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-white mb-1">
                            Azienda <span className="text-gray-400 text-sm">(opzionale)</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-white mb-1">Telefono</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="interest" className="block text-white mb-1">Interessato a</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                        >
                          <option value="grafica">Servizi di Grafica</option>
                          <option value="informatica">Servizi Informatici</option>
                          <option value="video-editing">Video Editing</option>
                          <option value="sociale">Collaborazione Sociale</option>
                          <option value="altro">Altro</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white mb-1">Messaggio *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-nexrank-dark-blue/50 border border-white/10 rounded-lg p-3 text-white"
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          className="primary-button w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Invio in corso...
                            </>
                          ) : (
                            "Invia messaggio"
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-10 md:py-16 bg-nexrank-dark-blue/30">
        <div className="section-container px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Siamo qui per te</h2>
            <p className="subtitle-text text-base md:text-xl">
              Non esitare a contattarci per qualsiasi esigenza o domanda sui nostri servizi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="glass-card p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Preventivi gratuiti</h3>
              <p className="text-gray-300">
                Richiedi un preventivo gratuito e senza impegno per qualsiasi nostro servizio.
              </p>
            </div>
            
            <div className="glass-card p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Consulenza iniziale</h3>
              <p className="text-gray-300">
                Offriamo una prima consulenza gratuita per comprendere al meglio le tue esigenze.
              </p>
            </div>
            
            <div className="glass-card p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Assistenza continua</h3>
              <p className="text-gray-300">
                Supporto costante durante e dopo la realizzazione del tuo progetto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
