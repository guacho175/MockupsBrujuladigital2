import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';

const languages = [
  { id: 'es', label: 'Español', flag: '🇪🇸', native: 'Español' },
  { id: 'en', label: 'English', flag: '🇺🇸', native: 'English' },
  { id: 'pt', label: 'Português', flag: '🇧🇷', native: 'Português' },
] as const;

export const LanguageView: React.FC = () => {
  const navigate = useNavigate();
  const { setLanguage, t } = useLanguage();

  const handleSelect = (lang: 'es' | 'en' | 'pt') => {
    setLanguage(lang);
    navigate('/loading');
  };

  return (
    <Layout showBackButton={false} showHomeButton={false}>
      <div className="h-full flex flex-col items-center justify-center gap-16">
        <div className="text-center space-y-6">
          <h2 className="text-7xl font-bold text-white tracking-tight">
            {t('select_language')}
          </h2>
          <div className="h-2 w-48 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-12 w-full max-w-4xl px-12">
          {languages.map((lang, index) => (
            <motion.button
              key={lang.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(lang.id)}
              className="group relative flex items-center justify-between p-12 bg-white/5 border-2 border-white/10 rounded-[40px] hover:bg-white/10 hover:border-blue-500/50 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-12">
                <span className="text-[100px] leading-none drop-shadow-xl">{lang.flag}</span>
                <div className="text-left">
                  <p className="text-5xl font-bold text-white mb-2">{lang.label}</p>
                  <p className="text-2xl font-medium text-white/40 uppercase tracking-widest">{lang.native}</p>
                </div>
              </div>
              <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="text-2xl text-white/30 font-medium">
          Powered by Digital Compass Assistant
        </p>
      </div>
    </Layout>
  );
};
