import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { MapPin, Navigation, ZoomIn, ZoomOut, Layers } from 'lucide-react';

export const MapView: React.FC = () => {
  const { t } = useLanguage();

  const pointsOfInterest = [
    { name: 'Observatorio', x: '45%', y: '40%' },
    { name: 'Plaza de Armas', x: '55%', y: '60%' },
    { name: 'Embalse Cogotí', x: '30%', y: '70%' },
    { name: 'Petroglifos', x: '70%', y: '25%' },
  ];

  return (
    <Layout title={t('map_directions')}>
      <div className="flex-1 flex flex-col gap-8 h-full">
        <div className="relative flex-1 rounded-[60px] overflow-hidden border-4 border-white/5 bg-slate-900 group">
          {/* Mock Map Image */}
          <img 
            src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBtYXAlMjB0b3BvZ3JhcGh5JTIwYXJjaGl0ZWN0dXJlJTIwc3R5bGV8ZW58MXx8fHwxNzgxNTUwNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            className="w-full h-full object-cover opacity-60 grayscale brightness-50"
            alt="Interactive Map"
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* POI Markers */}
          {pointsOfInterest.map((poi, index) => (
            <motion.div
              key={poi.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="absolute"
              style={{ left: poi.x, top: poi.y }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-8 bg-blue-500/20 rounded-full animate-ping" />
                <div className="relative p-4 bg-blue-600 rounded-full border-4 border-white shadow-2xl">
                  <MapPin size={32} className="text-white" />
                </div>
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-blue-950 px-6 py-2 rounded-xl text-xl font-bold">
                  {poi.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Map Controls */}
          <div className="absolute bottom-12 right-12 flex flex-col gap-4">
            <button className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-white hover:bg-white/20 transition-all">
              <ZoomIn size={48} />
            </button>
            <button className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-white hover:bg-white/20 transition-all">
              <ZoomOut size={48} />
            </button>
            <button className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-white hover:bg-white/20 transition-all">
              <Layers size={48} />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute top-12 left-12 p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl max-w-sm">
            <h4 className="text-2xl font-bold text-white mb-6">Puntos de Interés</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span className="text-xl">Atracción Turística</span>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="text-xl">Servicios Públicos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[200px]">
          <button className="flex items-center justify-center gap-6 bg-blue-600 hover:bg-blue-500 rounded-3xl text-white text-4xl font-bold transition-all shadow-xl shadow-blue-600/20">
            <Navigation size={48} />
            {t('view_route')}
          </button>
          <button className="flex items-center justify-center gap-6 bg-white/5 border-2 border-white/10 hover:border-white/20 rounded-3xl text-white text-4xl font-bold transition-all">
            <Navigation size={48} className="rotate-45" />
            {t('how_to_get')}
          </button>
        </div>
      </div>
    </Layout>
  );
};
