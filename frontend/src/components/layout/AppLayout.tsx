import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { useAuth } from '../../lib/auth-context';
import { navigation } from '../../data/navigation';

function titleForPath(pathname: string) {
  for (const group of navigation) {
    for (const item of group.items) {
      if (item.path === pathname) return item.label;
    }
  }
  return 'Panel Ejecutivo';
}

export function AppLayout() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar title={titleForPath(location.pathname)} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
