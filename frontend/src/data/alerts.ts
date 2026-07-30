import type { AlertRow } from '../types';

export const alerts: AlertRow[] = [
  {
    id: 'ALT-001',
    stationId: 'gn',
    message: 'Nivel de Diesel por debajo del 15% de capacidad',
    severity: 'critica',
    timestamp: '2026-07-30 07:42',
  },
  {
    id: 'ALT-002',
    stationId: 'jm',
    message: 'Diferencia de conciliación bancaria detectada',
    severity: 'advertencia',
    timestamp: '2026-07-29 19:10',
  },
  {
    id: 'ALT-003',
    stationId: 'lm',
    message: 'Permiso de Protección Civil vence en 12 días',
    severity: 'advertencia',
    timestamp: '2026-07-29 12:05',
  },
  {
    id: 'ALT-004',
    stationId: 'jdb',
    message: 'Mantenimiento preventivo completado sin incidentes',
    severity: 'info',
    timestamp: '2026-07-28 09:30',
  },
];
