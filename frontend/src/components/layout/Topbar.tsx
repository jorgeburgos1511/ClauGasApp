import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth-context';

export function Topbar({ title }: { title: string }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-[#0B2A4A]">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">{user?.name}</p>
          <p className="text-xs text-gray-500">
            {user?.role === 'director'
              ? 'Director General'
              : user?.role === 'gerente'
                ? 'Gerente de Estación'
                : 'Administrador'}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F6FED]/10 text-sm font-semibold text-[#2F6FED]">
          {initials}
        </div>
        <button
          onClick={handleLogout}
          className="ml-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          Salir
        </button>
      </div>
    </header>
  );
}
