import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Bus, Clock, MapPin, Info } from 'lucide-react';

export const TransportView: React.FC = () => {
  const { t } = useLanguage();

  const routes = [
    { id: '1', line: 'Línea Central', dest: 'Terminal Combarbalá', freq: 'Cada 15 min', status: 'En horario' },
    { id: '2', line: 'Expreso Rural', dest: 'Rinconada / El Astro', freq: 'Cada 45 min', status: 'Retraso 5 min' },
    { id: '3', line: 'Bus Regional', dest: 'Ovalle / La Serena', freq: '3 salidas diarias', status: 'Próximo 14:30' },
  ];

  return (
    <Layout title={t('transport')}>
      <div className="flex flex-col gap-12 max-w-6xl mx-auto pb-32">
        <div className="bg-blue-600/10 border-2 border-blue-500/20 p-12 rounded-[50px] flex items-center gap-10">
          <div className="p-8 bg-blue-600 rounded-3xl text-white">
            <Bus size={64} />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white">Estado del Transporte</h2>
            <p className="text-3xl text-white/60">Consulta rutas, horarios y estados del servicio en tiempo real.</p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-white mb-8">Rutas Disponibles</h3>
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-between"
            >
              <div className="flex items-center gap-10">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-blue-400 font-bold text-4xl">
                  {route.id}
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-bold text-white">{route.line}</h4>
                  <p className="text-2xl text-white/50 flex items-center gap-3">
                    <MapPin size={24} /> Destino: {route.dest}
                  </p>
                </div>
              </div>
              <div className="text-right space-y-3">
                <div className="flex items-center justify-end gap-3 text-white">
                  <Clock size={24} />
                  <span className="text-3xl font-bold">{route.freq}</span>
                </div>
                <span className={`text-xl font-bold px-4 py-1 rounded-full ${route.status.includes('Retraso') ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {route.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-10 bg-amber-500/5 border border-amber-500/20 rounded-[40px] flex items-start gap-8">
          <Info size={48} className="text-amber-500 shrink-0" />
          <div className="space-y-4">
            <h4 className="text-3xl font-bold text-amber-500">Información Importante</h4>
            <p className="text-2xl text-white/60 leading-relaxed">
              Los horarios pueden variar los fines de semana y festivos. Te recomendamos llegar al paradero 5 minutos antes de la hora programada. El pago se realiza directamente al conductor con efectivo.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
