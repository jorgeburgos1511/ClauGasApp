import type { KpiCard } from '../types';

export const inventoryKpis: KpiCard[] = [
  {
    id: 'inventario-total',
    label: 'Inventario total',
    value: '272,400 L',
    delta: 3.4,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
  {
    id: 'ocupacion-promedio',
    label: 'Ocupación promedio',
    value: '55.6%',
    delta: 5.2,
    deltaLabel: 'vs. semana anterior',
    tone: 'negative',
  },
  {
    id: 'tanques-alerta',
    label: 'Tanques en alerta',
    value: '10 de 32',
    delta: 2,
    deltaLabel: 'tanques más que la semana pasada',
    tone: 'negative',
  },
  {
    id: 'producto-mayor-inventario',
    label: 'Mayor inventario',
    value: 'Magna · 122,100 L',
    delta: 1.8,
    deltaLabel: 'vs. semana anterior',
    tone: 'neutral',
  },
];
