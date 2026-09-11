import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Mic, Pointer } from 'lucide-react';

export const WelcomeView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-end p-24 text-center overflow-hidden cursor-pointer"
      onClick={() => navigate('/language')}
    >
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1778401009797-8b8712877459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNlcnZhdG9yeSUyMHRlbGVzY29wZSUyMG1pbGt5JTIwd2F5JTIwc3RhcnMlMjBuaWdodCUyMHNreXxlbnwxfHx8fDE3ODE1NTA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Observatory night sky"
          className="w-full h-full object-cover scale-110 animate-pulse-slow transition-transform duration-[20s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl"
      >
        <div className="mb-8 inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
          <span className="text-xl font-bold tracking-widest uppercase text-blue-400">Sistema Activo</span>
        </div>

        <h1 className="text-[120px] font-black leading-tight mb-4 tracking-tighter text-white drop-shadow-2xl">
          {t('welcome_title')}
        </h1>
        
        <h2 className="text-5xl font-light mb-8 text-blue-100/90 max-w-4xl mx-auto leading-tight">
          {t('welcome_subtitle')}
        </h2>

        <p className="text-3xl font-medium text-white/60 mb-20 max-w-2xl mx-auto">
          {t('welcome_description')}
        </p>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-12"
        >
          <button className="group relative px-20 py-10 bg-white text-blue-950 rounded-full text-5xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-6">
              <Pointer size={56} className="text-blue-600 group-hover:animate-bounce" />
              {t('welcome_button')}
            </span>
          </button>

          <div className="flex items-center gap-6 text-white/50 text-2xl font-medium">
            <div className="p-4 rounded-full bg-white/5 border border-white/10">
              <Mic size={32} />
            </div>
            {t('welcome_voice')}
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic corner markers */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l-4 border-t-4 border-blue-500/30 rounded-tl-3xl" />
      <div className="absolute top-12 right-12 w-24 h-24 border-r-4 border-t-4 border-blue-500/30 rounded-tr-3xl" />
      <div className="absolute bottom-12 left-12 w-24 h-24 border-l-4 border-b-4 border-blue-500/30 rounded-bl-3xl" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r-4 border-b-4 border-blue-500/30 rounded-br-3xl" />
    </div>
  );
};
