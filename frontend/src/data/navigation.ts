import type { NavGroup } from '../types';

export const navigation: NavGroup[] = [
  {
    label: 'Operación',
    items: [
      { label: 'Resumen Ejecutivo', path: '/', enabled: true },
      { label: 'Ventas', path: '/ventas', enabled: true },
      { label: 'Inventarios', path: '/inventarios', enabled: true },
      { label: 'Compras', enabled: false },
      { label: 'Requerimientos', enabled: false },
      { label: 'Estaciones', enabled: false },
    ],
  },
  {
    label: 'Administración',
    items: [
      { label: 'Finanzas', path: '/finanzas', enabled: true },
      { label: 'Flujos de Dinero', enabled: false },
      { label: 'Gastos', enabled: false },
    ],
  },
  {
    label: 'Cumplimiento',
    items: [
      { label: 'Trámites y Permisos', path: '/tramites', enabled: true },
      { label: 'Licencia Única Ambiental', enabled: false },
      { label: 'Seguridad y Protección Civil', enabled: false },
      { label: 'Inspecciones', enabled: false },
      { label: 'Calendario Regulatorio', enabled: false },
    ],
  },
  {
    label: 'Reportes',
    items: [
      { label: 'Reportes', enabled: false },
      { label: 'Analítica', enabled: false },
    ],
  },
];
