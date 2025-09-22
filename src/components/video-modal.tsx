import { createPortal } from "react-dom";
import { useEffect } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
};

export default function VideoModal({ isOpen, onClose, src }: PropsType) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Previne scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-[9999]"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-out scale-95 animate-[modalZoom_0.3s_ease-out_forwards] aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar mais visível */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white hover:text-gray-300 transition-all duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          <span className="sr-only">Fechar vídeo</span>
        </button>
        
        {/* Título/Header do modal */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 rounded px-3 py-1">
          <span className="text-white text-sm font-medium">Venha conhecer um pouquinho da nossa loja</span>
        </div>

        <video 
          width="100%" 
          controls 
          autoPlay
          preload="metadata"
          className="bg-black outline-none w-full h-full object-contain rounded-lg"
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/webm" />
          <source src={src} type="video/ogg" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>,
    document.body,
  );
}
