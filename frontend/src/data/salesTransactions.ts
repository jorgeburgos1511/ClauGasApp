import type { SalesTransaction } from '../types';

// Respeta la disponibilidad real de producto por estación (ver lib/catalog.ts):
// Gas LP solo en jdb/ind/lm/gn; Diésel Premium solo en jm/ind/si.
export const salesTransactions: SalesTransaction[] = [
  { id: 'TXN-0001', date: '2026-07-30', time: '09:12', stationId: 'gn', product: 'Magna', liters: 42.5, amount: 1024.6, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0002', date: '2026-07-30', time: '09:18', stationId: 'ind', product: 'Diesel', liters: 120.0, amount: 3012.0, paymentMethod: 'Vales' },
  { id: 'TXN-0003', date: '2026-07-30', time: '09:25', stationId: 'jdb', product: 'Gas LP', liters: 30.0, amount: 402.0, paymentMethod: 'Efectivo' },
  { id: 'TXN-0004', date: '2026-07-30', time: '09:31', stationId: 'si', product: 'Diésel Premium', liters: 85.0, amount: 2312.5, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0005', date: '2026-07-30', time: '09:40', stationId: 'jm', product: 'Premium', liters: 38.2, amount: 1013.3, paymentMethod: 'Efectivo' },
  { id: 'TXN-0006', date: '2026-07-30', time: '09:47', stationId: 'lm', product: 'Magna', liters: 55.0, amount: 1327.0, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0007', date: '2026-07-30', time: '09:55', stationId: 'ind', product: 'Premium', liters: 41.0, amount: 1087.3, paymentMethod: 'Vales' },
  { id: 'TXN-0008', date: '2026-07-30', time: '10:02', stationId: 'gn', product: 'Diesel', liters: 200.0, amount: 5020.0, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0009', date: '2026-07-30', time: '10:10', stationId: 'jdb', product: 'Magna', liters: 33.4, amount: 805.16, paymentMethod: 'Efectivo' },
  { id: 'TXN-0010', date: '2026-07-30', time: '10:18', stationId: 'si', product: 'Magna', liters: 47.8, amount: 1153.42, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0011', date: '2026-07-30', time: '10:25', stationId: 'lm', product: 'Gas LP', liters: 25.0, amount: 335.0, paymentMethod: 'Efectivo' },
  { id: 'TXN-0012', date: '2026-07-30', time: '10:33', stationId: 'jm', product: 'Diésel Premium', liters: 96.0, amount: 2611.2, paymentMethod: 'Tarjeta' },
  { id: 'TXN-0013', date: '2026-07-30', time: '10:41', stationId: 'ind', product: 'Gas LP', liters: 18.5, amount: 247.9, paymentMethod: 'Efectivo' },
  { id: 'TXN-0014', date: '2026-07-30', time: '10:48', stationId: 'gn', product: 'Premium', liters: 29.6, amount: 784.4, paymentMethod: 'Vales' },
];
