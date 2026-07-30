import type { KpiCard } from '../types';

export const salesKpis: KpiCard[] = [
  {
    id: 'total-semana',
    label: 'Total semana',
    value: '$4.70M',
    delta: 4.8,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
  {
    id: 'transacciones',
    label: 'Transacciones',
    value: '6,340',
    delta: 2.6,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
  {
    id: 'ventas-contado',
    label: 'Ventas de contado',
    value: '$1.97M',
    delta: 1.2,
    deltaLabel: 'vs. semana anterior',
    tone: 'neutral',
  },
  {
    id: 'ventas-tarjeta',
    label: 'Ventas con tarjeta',
    value: '$2.40M',
    delta: 6.5,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
];
