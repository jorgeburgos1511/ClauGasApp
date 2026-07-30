import { createContext, useContext, useState, type ReactNode } from 'react';
import type { RoleId, User } from '../types';
import { roles } from '../data/roles';

interface AuthContextValue {
  user: User | null;
  login: (role: RoleId) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const DIRECTOR_NAME = 'Miguel Castro';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: RoleId) => {
    const roleInfo = roles.find((r) => r.id === role);
    const name = role === 'director' ? DIRECTOR_NAME : (roleInfo?.label ?? 'Usuario');
    setUser({ name, role });
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}
