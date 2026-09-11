import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { CheckCircle2 } from 'lucide-react';

export const ClosingView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout showBackButton={false} showHomeButton={false}>
      <div className="h-full flex flex-col items-center justify-center text-center gap-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="w-64 h-64 bg-emerald-500/20 rounded-full flex items-center justify-center border-4 border-emerald-500/30 shadow-[0_0_100px_rgba(16,185,129,0.2)]"
        >
          <CheckCircle2 size={120} className="text-emerald-500" />
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-[90px] font-black text-white leading-tight">
            {t('closing_thanks')}
          </h2>
          <div className="space-y-4">
            <p className="text-4xl text-white/60 font-medium">
              Esperamos que disfrutes tu estadía en Combarbalá.
            </p>
            <div className="flex items-center justify-center gap-6 text-2xl text-white/30 font-bold uppercase tracking-[0.3em]">
              <div className="w-12 h-1 bg-white/10" />
              <span>{t('closing_auto')}</span>
              <div className="w-12 h-1 bg-white/10" />
            </div>
          </div>
        </div>

        {/* Visual countdown progress */}
        <div className="w-96 h-2 bg-white/5 rounded-full overflow-hidden mt-12">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-blue-500"
          />
        </div>
      </div>
    </Layout>
  );
};
