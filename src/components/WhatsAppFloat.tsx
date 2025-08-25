
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
        className="group flex items-center gap-2 sm:gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-lg sm:text-2xl">💬</span>
        </div>
        
        {/* Message bubble - hidden on mobile and small tablets */}
        <div className="hidden lg:block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
          <div className="whitespace-nowrap">
            <p className="font-semibold text-sm">Fale conosco!</p>
            <p className="text-xs opacity-90">Clique para conversar</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
