import type { ReconciliationRow } from '../types';

export const reconciliation: ReconciliationRow[] = [
  { id: 'CON-0001', stationId: 'jdb', date: '2026-07-30', bankAmount: 780500, systemAmount: 780500, difference: 0, status: 'conciliado' },
  { id: 'CON-0002', stationId: 'jm', date: '2026-07-30', bankAmount: 715200, systemAmount: 715200, difference: 0, status: 'conciliado' },
  { id: 'CON-0003', stationId: 'ind', date: '2026-07-30', bankAmount: 855800, systemAmount: 852300, difference: 3500, status: 'diferencia' },
  { id: 'CON-0004', stationId: 'lm', date: '2026-07-30', bankAmount: 635000, systemAmount: 635000, difference: 0, status: 'conciliado' },
  { id: 'CON-0005', stationId: 'si', date: '2026-07-30', bankAmount: 745900, systemAmount: 745900, difference: 0, status: 'conciliado' },
  { id: 'CON-0006', stationId: 'gn', date: '2026-07-30', bankAmount: 972400, systemAmount: 968100, difference: 4300, status: 'diferencia' },
  { id: 'CON-0007', stationId: 'jdb', date: '2026-07-29', bankAmount: 0, systemAmount: 742300, difference: 742300, status: 'pendiente' },
  { id: 'CON-0008', stationId: 'jm', date: '2026-07-29', bankAmount: 705100, systemAmount: 705100, difference: 0, status: 'conciliado' },
  { id: 'CON-0009', stationId: 'ind', date: '2026-07-29', bankAmount: 800200, systemAmount: 800200, difference: 0, status: 'conciliado' },
  { id: 'CON-0010', stationId: 'gn', date: '2026-07-29', bankAmount: 0, systemAmount: 830500, difference: 830500, status: 'pendiente' },
];
