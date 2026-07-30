import type { RequirementRow } from '../types';

export const requirements: RequirementRow[] = [
  {
    id: 'REQ-001',
    stationId: 'jdb',
    description: 'Mantenimiento de dispensarios línea 3',
    priority: 'Alta',
    status: 'En proceso',
    dueDate: '2026-08-02',
  },
  {
    id: 'REQ-002',
    stationId: 'gn',
    description: 'Reposición de tanque subterráneo Diesel',
    priority: 'Alta',
    status: 'Pendiente',
    dueDate: '2026-08-04',
  },
  {
    id: 'REQ-003',
    stationId: 'ind',
    description: 'Calibración de básculas de medición',
    priority: 'Media',
    status: 'Pendiente',
    dueDate: '2026-08-08',
  },
  {
    id: 'REQ-004',
    stationId: 'si',
    description: 'Capacitación de personal en protocolo PCI',
    priority: 'Baja',
    status: 'Resuelto',
    dueDate: '2026-07-28',
  },
  {
    id: 'REQ-005',
    stationId: 'lm',
    description: 'Sustitución de extintores vencidos',
    priority: 'Media',
    status: 'En proceso',
    dueDate: '2026-08-05',
  },
];
