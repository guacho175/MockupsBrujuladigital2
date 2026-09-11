import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Smile, Meh, Frown, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SurveyView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    { id: 4, label: t('survey_very_useful'), icon: Heart, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 3, label: t('survey_useful'), icon: Smile, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 2, label: t('survey_somewhat'), icon: Meh, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { id: 1, label: t('survey_not_useful'), icon: Frown, color: 'text-slate-400', bg: 'bg-slate-500/10' },
  ];

  const handleFinish = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#60a5fa', '#ffffff']
    });
    setTimeout(() => {
      navigate('/closing');
    }, 1000);
  };

  return (
    <Layout showBackButton={false} showHomeButton={false}>
      <div className="h-full flex flex-col items-center justify-center gap-20 max-w-5xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-[80px] font-black text-white leading-tight">
            {t('survey_title')}
          </h2>
          <p className="text-4xl text-white/50 font-medium">Tu opinión nos ayuda a mejorar la experiencia del visitante</p>
        </div>

        <div className="grid grid-cols-2 gap-10 w-full">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`p-16 rounded-[60px] border-4 transition-all flex flex-col items-center gap-8 group active:scale-95 ${
                selected === opt.id 
                  ? 'bg-white/10 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.2)]' 
                  : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              <opt.icon size={120} className={`${selected === opt.id ? opt.color : 'text-white/40'} group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
              <span className={`text-4xl font-bold ${selected === opt.id ? 'text-white' : 'text-white/60'}`}>
                {opt.label}
              </span>
            </button>
          ))}
        </div>

        <button
          disabled={selected === null}
          onClick={handleFinish}
          className={`px-24 py-10 rounded-full text-5xl font-bold transition-all ${
            selected !== null 
              ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-2xl active:scale-95' 
              : 'bg-white/10 text-white/20 cursor-not-allowed'
          }`}
        >
          {t('finish')}
        </button>
      </div>
    </Layout>
  );
};
