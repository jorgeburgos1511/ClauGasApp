import type { KpiCard } from '../types';

export const executiveKpis: KpiCard[] = [
  {
    id: 'ventas-mes',
    label: 'Ventas del mes',
    value: '$18.4M',
    delta: 6.2,
    deltaLabel: 'vs. mes anterior',
    tone: 'positive',
  },
  {
    id: 'litros-vendidos',
    label: 'Litros vendidos',
    value: '2.31M L',
    delta: 3.1,
    deltaLabel: 'vs. mes anterior',
    tone: 'positive',
  },
  {
    id: 'inventario-disponible',
    label: 'Inventario disponible',
    value: '71%',
    delta: 4.5,
    deltaLabel: 'vs. semana anterior',
    tone: 'negative',
  },
  {
    id: 'cumplimiento',
    label: 'Cumplimiento regulatorio',
    value: '86%',
    delta: 2.0,
    deltaLabel: 'vs. trimestre anterior',
    tone: 'positive',
  },
];
