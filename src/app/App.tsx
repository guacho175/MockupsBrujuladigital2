import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './components/LanguageContext';
import { Toaster } from 'sonner';
import '../styles/theme.css';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-blue-500/30">
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
