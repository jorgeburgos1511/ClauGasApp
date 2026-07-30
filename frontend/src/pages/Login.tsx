import { useNavigate } from 'react-router-dom';
import { roles } from '../data/roles';
import { useAuth } from '../lib/auth-context';
import type { RoleId } from '../types';

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSelect = (roleId: RoleId) => {
    login(roleId);
    navigate('/', { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F7FA] px-4">
      <div className="w-full max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B2A4A] text-lg font-bold text-white">
            GG
          </div>
          <h1 className="text-2xl font-bold text-[#0B2A4A]">Grupo Gasolinero</h1>
          <p className="mt-1 text-sm text-gray-500">Panel Ejecutivo — selecciona tu rol para continuar</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleSelect(role.id)}
              className="group flex flex-col items-start rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#2F6FED] hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F6FED]/10 text-[#2F6FED] group-hover:bg-[#2F6FED] group-hover:text-white">
                <RoleIcon role={role.id} />
              </div>
              <p className="text-sm font-semibold text-[#0B2A4A]">{role.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{role.description}</p>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Fase de diseño — datos de ejemplo. Acceso sin contraseña.
        </p>
      </div>
    </div>
  );
}

function RoleIcon({ role }: { role: RoleId }) {
  if (role === 'director') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />
      </svg>
    );
  }
  if (role === 'gerente') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3a1.5 1.5 0 013 0v.4a1.6 1.6 0 002.4 1.4l.35-.2a1.5 1.5 0 012 2l-.2.35a1.6 1.6 0 001.4 2.4H19a1.5 1.5 0 010 3h-.4a1.6 1.6 0 00-1.4 2.4l.2.35a1.5 1.5 0 01-2 2l-.35-.2a1.6 1.6 0 00-2.4 1.4v.4a1.5 1.5 0 01-3 0v-.4a1.6 1.6 0 00-2.4-1.4l-.35.2a1.5 1.5 0 01-2-2l.2-.35a1.6 1.6 0 00-1.4-2.4H5a1.5 1.5 0 010-3h.4a1.6 1.6 0 001.4-2.4l-.2-.35a1.5 1.5 0 012-2l.35.2A1.6 1.6 0 009.5 3.4V3z" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
