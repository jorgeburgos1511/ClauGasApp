import type { Tank } from '../types';

/**
 * Distribución de tanques por estación: no todas las estaciones manejan los 5
 * productos. Gas LP y Diésel Premium solo están en las estaciones donde el
 * cliente confirmó que se comercializan; ajustar aquí cuando se conecte a SQL Server.
 */
export const tanks: Tank[] = [
  // Estación Juan de la Barrera (jdb)
  { id: 'jdb-1', stationId: 'jdb', tankNumber: 1, product: 'Magna', currentLiters: 15400, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-27' },
  { id: 'jdb-2', stationId: 'jdb', tankNumber: 2, product: 'Magna', currentLiters: 6200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-24' },
  { id: 'jdb-3', stationId: 'jdb', tankNumber: 3, product: 'Premium', currentLiters: 7800, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-28' },
  { id: 'jdb-4', stationId: 'jdb', tankNumber: 4, product: 'Diesel', currentLiters: 17200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-29' },
  { id: 'jdb-5', stationId: 'jdb', tankNumber: 5, product: 'Gas LP', currentLiters: 3100, capacityLiters: 5000, minLiters: 1000, lastRefill: '2026-07-25' },

  // Estación Jesús Michel (jm)
  { id: 'jm-1', stationId: 'jm', tankNumber: 1, product: 'Magna', currentLiters: 12100, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-26' },
  { id: 'jm-2', stationId: 'jm', tankNumber: 2, product: 'Magna', currentLiters: 4300, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-22' },
  { id: 'jm-3', stationId: 'jm', tankNumber: 3, product: 'Premium', currentLiters: 8900, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-29' },
  { id: 'jm-4', stationId: 'jm', tankNumber: 4, product: 'Diesel', currentLiters: 3200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-20' },
  { id: 'jm-5', stationId: 'jm', tankNumber: 5, product: 'Diésel Premium', currentLiters: 5400, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-27' },

  // Estación Independencia (ind)
  { id: 'ind-1', stationId: 'ind', tankNumber: 1, product: 'Magna', currentLiters: 18300, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-29' },
  { id: 'ind-2', stationId: 'ind', tankNumber: 2, product: 'Magna', currentLiters: 9800, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-25' },
  { id: 'ind-3', stationId: 'ind', tankNumber: 3, product: 'Premium', currentLiters: 2100, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-21' },
  { id: 'ind-4', stationId: 'ind', tankNumber: 4, product: 'Diesel', currentLiters: 15600, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-28' },
  { id: 'ind-5', stationId: 'ind', tankNumber: 5, product: 'Gas LP', currentLiters: 900, capacityLiters: 5000, minLiters: 1000, lastRefill: '2026-07-18' },
  { id: 'ind-6', stationId: 'ind', tankNumber: 6, product: 'Diésel Premium', currentLiters: 6700, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-26' },

  // Estación Los Maestros (lm)
  { id: 'lm-1', stationId: 'lm', tankNumber: 1, product: 'Magna', currentLiters: 5100, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-23' },
  { id: 'lm-2', stationId: 'lm', tankNumber: 2, product: 'Premium', currentLiters: 6600, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-27' },
  { id: 'lm-3', stationId: 'lm', tankNumber: 3, product: 'Diesel', currentLiters: 14200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-28' },
  { id: 'lm-4', stationId: 'lm', tankNumber: 4, product: 'Diesel', currentLiters: 3800, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-19' },
  { id: 'lm-5', stationId: 'lm', tankNumber: 5, product: 'Gas LP', currentLiters: 2600, capacityLiters: 5000, minLiters: 1000, lastRefill: '2026-07-24' },

  // Estación San Ignacio (si)
  { id: 'si-1', stationId: 'si', tankNumber: 1, product: 'Magna', currentLiters: 16900, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-29' },
  { id: 'si-2', stationId: 'si', tankNumber: 2, product: 'Magna', currentLiters: 11200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-25' },
  { id: 'si-3', stationId: 'si', tankNumber: 3, product: 'Premium', currentLiters: 4300, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-24' },
  { id: 'si-4', stationId: 'si', tankNumber: 4, product: 'Diesel', currentLiters: 7100, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-22' },
  { id: 'si-5', stationId: 'si', tankNumber: 5, product: 'Diésel Premium', currentLiters: 8200, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-28' },

  // Estación Guardia Nacional (gn)
  { id: 'gn-1', stationId: 'gn', tankNumber: 1, product: 'Magna', currentLiters: 19100, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-30' },
  { id: 'gn-2', stationId: 'gn', tankNumber: 2, product: 'Magna', currentLiters: 3700, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-20' },
  { id: 'gn-3', stationId: 'gn', tankNumber: 3, product: 'Premium', currentLiters: 5600, capacityLiters: 10000, minLiters: 2000, lastRefill: '2026-07-26' },
  { id: 'gn-4', stationId: 'gn', tankNumber: 4, product: 'Diesel', currentLiters: 16400, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-29' },
  { id: 'gn-5', stationId: 'gn', tankNumber: 5, product: 'Diesel', currentLiters: 9200, capacityLiters: 20000, minLiters: 4000, lastRefill: '2026-07-23' },
  { id: 'gn-6', stationId: 'gn', tankNumber: 6, product: 'Gas LP', currentLiters: 1400, capacityLiters: 5000, minLiters: 1000, lastRefill: '2026-07-21' },
];
