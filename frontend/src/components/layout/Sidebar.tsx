import { NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#0B2A4A] text-white">
      <div className="flex items-center gap-2 px-5 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F6FED] text-sm font-bold">
          GG
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">Grupo Gasolinero</p>
          <p className="text-xs text-white/50">Panel Ejecutivo</p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-6">
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) =>
                item.enabled && item.path ? (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? 'bg-[#2F6FED] text-white font-medium'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-white/30"
                    title="Disponible en una próxima entrega"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] uppercase tracking-wide">Próx.</span>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
