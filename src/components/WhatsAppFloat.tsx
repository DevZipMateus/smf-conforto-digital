
import { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <a
        href="https://wa.me/5511913558281"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 overflow-hidden"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src="/lovable-uploads/24daba64-8faf-41f5-8697-ecf772465197.png" 
          alt="WhatsApp"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
        />
        
        {/* Message bubble - appears on hover */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Fale conosco!
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
