import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/auth-context';
import { AppLayout } from './components/layout/AppLayout';
import { Login } from './pages/Login';
import { ResumenEjecutivo } from './pages/ResumenEjecutivo';
import { Inventarios } from './pages/Inventarios';
import { Ventas } from './pages/Ventas';
import { Finanzas } from './pages/Finanzas';
import { Tramites } from './pages/Tramites';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<ResumenEjecutivo />} />
            <Route path="/inventarios" element={<Inventarios />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/finanzas" element={<Finanzas />} />
            <Route path="/tramites" element={<Tramites />} />
          </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
