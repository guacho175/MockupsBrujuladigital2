import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Loader2 } from 'lucide-react';

export const LoadingView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/menu');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout showBackButton={false} showHomeButton={false}>
      <div className="h-full flex flex-col items-center justify-center text-center gap-12">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border-8 border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-48 h-48 border-t-8 border-blue-500 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 size={64} className="text-blue-400 animate-spin" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-6xl font-bold text-white">
            {t('loading_interface')}
          </h2>
          <p className="text-3xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
            {t('loading_preparing')}
          </p>
        </div>

        {/* Decorative celestial grid */}
        <div className="mt-20 flex gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-blue-400"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
