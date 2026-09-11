import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { touristPlaces } from './TouristPlacesView';
import { MapPin, Info, ArrowLeft } from 'lucide-react';

export const PlaceDetailView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const place = touristPlaces.find(p => p.id === id);

  if (!place) return null;

  return (
    <Layout title={place.name}>
      <div className="max-w-7xl mx-auto flex flex-col gap-16 pb-32">
        <div className="relative h-[800px] rounded-[80px] overflow-hidden shadow-2xl">
          <img 
            src={place.image} 
            className="w-full h-full object-cover"
            alt={place.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold text-white leading-tight">Descripción</h2>
              <p className="text-4xl text-white/70 leading-relaxed font-light">
                {place.details}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 space-y-4">
                <div className="flex items-center gap-4 text-blue-400">
                  <MapPin size={40} />
                  <span className="text-3xl font-bold">Ubicación</span>
                </div>
                <p className="text-2xl text-white/60">{place.location}</p>
              </div>
              <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 space-y-4">
                <div className="flex items-center gap-4 text-amber-400">
                  <Info size={40} />
                  <span className="text-3xl font-bold">Información Útil</span>
                </div>
                <p className="text-2xl text-white/60">Se recomienda visitar durante la mañana. Llevar agua y protección solar.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <button 
              onClick={() => navigate('/map')}
              className="p-12 bg-blue-600 rounded-[40px] text-white flex flex-col items-center gap-4 shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
            >
              <MapPin size={64} />
              <span className="text-3xl font-bold">¿Cómo llegar?</span>
            </button>
            <button 
              onClick={() => navigate('/tourist-places')}
              className="p-12 bg-white/5 border border-white/10 rounded-[40px] text-white flex flex-col items-center gap-4 hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={64} />
              <span className="text-3xl font-bold">Volver al listado</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
