import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  title?: string;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showBackButton = true, 
  showHomeButton = true,
  title,
  className = ""
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const isHome = location.pathname === "/" || location.pathname === "/language" || location.pathname === "/loading";

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#020617] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      </div>

      {/* Header */}
      {!isHome && (
        <header className="relative z-10 p-12 flex items-center justify-between border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-6">
            {showBackButton && (
              <button 
                onClick={() => navigate(-1)}
                className="p-6 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white"
                aria-label="Volver"
              >
                <ArrowLeft size={48} />
              </button>
            )}
            {title && (
              <h1 className="text-5xl font-bold tracking-tight text-white/90">
                {title}
              </h1>
            )}
          </div>

          {showHomeButton && (
            <button 
              onClick={() => navigate('/menu')}
              className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-blue-600/20 hover:bg-blue-600/30 active:scale-95 transition-all text-blue-400 border border-blue-500/30"
            >
              <Home size={40} />
              <span className="text-2xl font-semibold">{t('main_menu')}</span>
            </button>
          )}
        </header>
      )}

      {/* Main Content */}
      <main className={`relative z-10 flex-1 flex flex-col p-12 ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 p-8 flex justify-center items-center gap-4 text-white/40 border-t border-white/5 bg-black/20">
        <div className="w-12 h-12 rounded-full border-2 border-blue-500/30 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <p className="text-2xl font-medium uppercase tracking-[0.2em]">{t('welcome_title')}</p>
      </footer>
    </div>
  );
};
