import { createBrowserRouter } from "react-router";
import { WelcomeView } from "./views/WelcomeView";
import { LanguageView } from "./views/LanguageView";
import { LoadingView } from "./views/LoadingView";
import { MainMenuView } from "./views/MainMenuView";
import { ObservatoryView } from "./views/ObservatoryView";
import { TouristPlacesView } from "./views/TouristPlacesView";
import { PlaceDetailView } from "./views/PlaceDetailView";
import { MapView } from "./views/MapView";
import { GastronomyView } from "./views/GastronomyView";
import { TransportView } from "./views/TransportView";
import { EmergencyView } from "./views/EmergencyView";
import { AIView } from "./views/AIView";
import { SurveyView } from "./views/SurveyView";
import { ClosingView } from "./views/ClosingView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomeView,
  },
  {
    path: "/language",
    Component: LanguageView,
  },
  {
    path: "/loading",
    Component: LoadingView,
  },
  {
    path: "/menu",
    Component: MainMenuView,
  },
  {
    path: "/observatory",
    Component: ObservatoryView,
  },
  {
    path: "/tourist-places",
    Component: TouristPlacesView,
  },
  {
    path: "/tourist-places/:id",
    Component: PlaceDetailView,
  },
  {
    path: "/map",
    Component: MapView,
  },
  {
    path: "/gastronomy",
    Component: GastronomyView,
  },
  {
    path: "/transport",
    Component: TransportView,
  },
  {
    path: "/emergency",
    Component: EmergencyView,
  },
  {
    path: "/ai",
    Component: AIView,
  },
  {
    path: "/survey",
    Component: SurveyView,
  },
  {
    path: "/closing",
    Component: ClosingView,
  },
]);
