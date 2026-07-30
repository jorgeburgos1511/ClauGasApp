import type { KpiCard } from '../types';

export const financeKpis: KpiCard[] = [
  {
    id: 'entradas-semana',
    label: 'Entradas de la semana',
    value: '$4.92M',
    delta: 5.1,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
  {
    id: 'salidas-semana',
    label: 'Salidas de la semana',
    value: '$3.12M',
    delta: 3.4,
    deltaLabel: 'vs. semana anterior',
    tone: 'negative',
  },
  {
    id: 'flujo-neto',
    label: 'Flujo neto',
    value: '$1.80M',
    delta: 7.8,
    deltaLabel: 'vs. semana anterior',
    tone: 'positive',
  },
  {
    id: 'por-conciliar',
    label: 'Por conciliar',
    value: '4 de 10',
    delta: 1,
    deltaLabel: 'registro más que ayer',
    tone: 'negative',
  },
];
