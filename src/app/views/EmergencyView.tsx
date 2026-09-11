import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Phone, Shield, PlusCircle, Flame, Building2, HelpCircle } from 'lucide-react';
import { toast } from 'sonner';

export const EmergencyView: React.FC = () => {
  const { t } = useLanguage();

  const emergencies = [
    { id: '133', label: 'Carabineros', icon: Shield, color: 'bg-emerald-600', hover: 'hover:bg-emerald-500' },
    { id: '131', label: 'Ambulancia (SAMU)', icon: PlusCircle, color: 'bg-rose-600', hover: 'hover:bg-rose-500' },
    { id: '132', label: 'Bomberos', icon: Flame, color: 'bg-orange-600', hover: 'hover:bg-orange-500' },
    { id: 'Muni', label: 'Seguridad Ciudadana', icon: Building2, color: 'bg-blue-600', hover: 'hover:bg-blue-500' },
  ];

  const handleCall = (label: string, number: string) => {
    toast.info(`Llamando a ${label} (${number})...`, {
      description: "Este es un servicio de emergencia. Mantenga la calma.",
      duration: 5000,
    });
  };

  return (
    <Layout title={t('emergencies')}>
      <div className="flex flex-col gap-16 max-w-6xl mx-auto pb-32">
        <div className="text-center space-y-6">
          <p className="text-4xl text-white/70 font-medium">Presiona el botón para solicitar asistencia inmediata</p>
          <div className="h-1 w-24 bg-rose-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {emergencies.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCall(item.label, item.id)}
              className={`relative flex items-center gap-10 p-12 ${item.color} ${item.hover} rounded-[50px] transition-all shadow-2xl active:scale-95 group overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                <item.icon size={160} />
              </div>
              
              <div className="relative z-10 p-8 bg-white/20 rounded-full">
                <item.icon size={64} className="text-white" />
              </div>
              
              <div className="relative z-10 text-left space-y-2">
                <h3 className="text-5xl font-black text-white">{item.label}</h3>
                <p className="text-4xl font-bold text-white/80">{item.id}</p>
              </div>

              <div className="relative z-10 ml-auto p-4 bg-white/20 rounded-full">
                <Phone size={40} className="text-white animate-pulse" />
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 p-12 bg-white/5 border-2 border-dashed border-white/20 rounded-[50px] flex items-center gap-10">
          <div className="p-8 bg-slate-700 rounded-full text-white">
            <HelpCircle size={48} />
          </div>
          <div className="space-y-4">
            <h4 className="text-3xl font-bold text-white">{t('ai_assistant')}</h4>
            <p className="text-2xl text-white/50 leading-relaxed">
              Si necesitas ayuda sobre cómo llegar a un centro de salud o farmacia de turno, puedes consultar a nuestro Asistente Inteligente.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
