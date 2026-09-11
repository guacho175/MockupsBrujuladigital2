import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt';

interface Translations {
  welcome_title: string;
  welcome_subtitle: string;
  welcome_description: string;
  welcome_button: string;
  welcome_voice: string;
  select_language: string;
  loading_interface: string;
  loading_preparing: string;
  main_menu: string;
  observatory: string;
  tourist_places: string;
  map_directions: string;
  gastronomy_services: string;
  transport: string;
  emergencies: string;
  ai_assistant: string;
  change_language: string;
  end_session: string;
  back_to_menu: string;
  view_details: string;
  how_to_get: string;
  view_route: string;
  emergency_contacts: string;
  ai_placeholder: string;
  ai_suggestion1: string;
  ai_suggestion2: string;
  ai_suggestion3: string;
  another_query: string;
  survey_title: string;
  survey_very_useful: string;
  survey_useful: string;
  survey_somewhat: string;
  survey_not_useful: string;
  finish: string;
  closing_thanks: string;
  closing_auto: string;
}

const translations: Record<Language, Translations> = {
  es: {
    welcome_title: "Brújula Digital",
    welcome_subtitle: "Bienvenido al Observatorio Cruz del Sur",
    welcome_description: "Información turística, astronómica y servicios locales",
    welcome_button: "Tocar para comenzar",
    welcome_voice: "También puedes usar asistencia por voz",
    select_language: "Selecciona tu idioma",
    loading_interface: "Cargando interfaz...",
    loading_preparing: "Preparando contenido en el idioma seleccionado",
    main_menu: "Menú principal",
    observatory: "Observatorio Cruz del Sur",
    tourist_places: "Lugares turísticos",
    map_directions: "Mapa e indicaciones",
    gastronomy_services: "Gastronomía y servicios",
    transport: "Transporte",
    emergencies: "Emergencias",
    ai_assistant: "Asistente IA",
    change_language: "Cambiar idioma",
    end_session: "Finalizar sesión",
    back_to_menu: "Volver al menú",
    view_details: "Ver detalle",
    how_to_get: "Cómo llegar",
    view_route: "Ver ruta",
    emergency_contacts: "Contactos de emergencia",
    ai_placeholder: "Haz una pregunta...",
    ai_suggestion1: "¿Qué puedo visitar cerca?",
    ai_suggestion2: "¿Cómo llego al observatorio?",
    ai_suggestion3: "Recomiéndame restaurantes",
    another_query: "Hacer otra consulta",
    survey_title: "¿Te resultó útil la información?",
    survey_very_useful: "Muy útil",
    survey_useful: "Útil",
    survey_somewhat: "Poco útil",
    survey_not_useful: "No útil",
    finish: "Finalizar",
    closing_thanks: "Gracias por usar Brújula Digital",
    closing_auto: "La sesión finalizará automáticamente",
  },
  en: {
    welcome_title: "Digital Compass",
    welcome_subtitle: "Welcome to Southern Cross Observatory",
    welcome_description: "Tourist, astronomical info and local services",
    welcome_button: "Touch to start",
    welcome_voice: "You can also use voice assistance",
    select_language: "Select your language",
    loading_interface: "Loading interface...",
    loading_preparing: "Preparing content in the selected language",
    main_menu: "Main Menu",
    observatory: "Southern Cross Observatory",
    tourist_places: "Tourist Places",
    map_directions: "Map & Directions",
    gastronomy_services: "Food & Services",
    transport: "Transport",
    emergencies: "Emergencies",
    ai_assistant: "AI Assistant",
    change_language: "Change Language",
    end_session: "End Session",
    back_to_menu: "Back to menu",
    view_details: "View Details",
    how_to_get: "How to get there",
    view_route: "View Route",
    emergency_contacts: "Emergency Contacts",
    ai_placeholder: "Ask a question...",
    ai_suggestion1: "What can I visit nearby?",
    ai_suggestion2: "How do I get to the observatory?",
    ai_suggestion3: "Recommend restaurants",
    another_query: "Make another query",
    survey_title: "Was the information useful?",
    survey_very_useful: "Very useful",
    survey_useful: "Useful",
    survey_somewhat: "Somewhat useful",
    survey_not_useful: "Not useful",
    finish: "Finish",
    closing_thanks: "Thanks for using Digital Compass",
    closing_auto: "The session will end automatically",
  },
  pt: {
    welcome_title: "Bússola Digital",
    welcome_subtitle: "Bem-vindo ao Observatório Cruz do Sul",
    welcome_description: "Informações turísticas, astronômicas e serviços",
    welcome_button: "Toque para começar",
    welcome_voice: "Você também pode usar assistência por voz",
    select_language: "Selecione seu idioma",
    loading_interface: "Carregando interface...",
    loading_preparing: "Preparando conteúdo no idioma selecionado",
    main_menu: "Menu Principal",
    observatory: "Observatório Cruz do Sul",
    tourist_places: "Locais Turísticos",
    map_directions: "Mapa e Direções",
    gastronomy_services: "Gastronomia e Serviços",
    transport: "Transporte",
    emergencies: "Emergências",
    ai_assistant: "Assistente IA",
    change_language: "Alterar Idioma",
    end_session: "Encerrar Sessão",
    back_to_menu: "Voltar ao menu",
    view_details: "Ver detalhes",
    how_to_get: "Como chegar",
    view_route: "Ver rota",
    emergency_contacts: "Contatos de emergência",
    ai_placeholder: "Faça uma pergunta...",
    ai_suggestion1: "O que posso visitar por perto?",
    ai_suggestion2: "Como chego ao observatório?",
    ai_suggestion3: "Recomende restaurantes",
    another_query: "Fazer outra pergunta",
    survey_title: "As informações foram úteis?",
    survey_very_useful: "Muito útil",
    survey_useful: "Útil",
    survey_somewhat: "Pouco útil",
    survey_not_useful: "Não útil",
    finish: "Finalizar",
    closing_thanks: "Obrigado por usar a Bússola Digital",
    closing_auto: "A sessão será encerrada automaticamente",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: keyof Translations) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
