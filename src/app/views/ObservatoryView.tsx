import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Clock, Info, Star, Calendar } from 'lucide-react';

export const ObservatoryView: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: "Información Astronómica",
      icon: Star,
      content: "El Observatorio Cruz del Sur es el más grande de su tipo en el hemisferio sur, diseñado para acercar la astronomía a la comunidad. Cuenta con 4 cúpulas de observación equipadas con telescopios de alta tecnología."
    },
    {
      title: "Horarios",
      icon: Clock,
      content: "Abierto de Martes a Domingo. Tours nocturnos: 20:00, 21:30 y 23:00 hrs. Tours diurnos (solar): 11:00 y 16:00 hrs."
    },
    {
      title: "Actividades",
      icon: Calendar,
      content: "Observación nocturna, tours guiados, talleres de astrofotografía, observación solar y eventos especiales según el calendario astronómico."
    },
    {
      title: "Recomendaciones",
      icon: Info,
      content: "Se recomienda asistir con ropa abrigada, incluso en verano. Evitar el uso de linternas o pantallas brillantes durante la observación. Reserva previa obligatoria."
    }
  ];

  return (
    <Layout title={t('observatory')}>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto pb-32">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1532417768914-d26087f20e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25vbXklMjBvYnNlcnZhdG9yeSUyMHRlbGVzY29wZSUyMHN0YXJzfGVufDF8fHx8MTc4MTU1MDc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            className="w-full h-full object-cover"
            alt="Southern Cross Observatory"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-20">
            <div className="space-y-4">
              <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-xl font-bold uppercase tracking-widest">Destacado</span>
              <h2 className="text-7xl font-bold text-white leading-tight">Explora el Cosmos en Combarbalá</h2>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[50px] space-y-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="p-6 rounded-3xl bg-blue-600/20 text-blue-400">
                  <section.icon size={48} />
                </div>
                <h3 className="text-4xl font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-3xl text-white/60 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-16 py-8 bg-blue-600 hover:bg-blue-500 text-white rounded-[32px] text-4xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
            Reservar Tour Online
          </button>
        </div>
      </div>
    </Layout>
  );
};
