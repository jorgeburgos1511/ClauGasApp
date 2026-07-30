import type { Station } from '../types';

export const stations: Station[] = [
  { id: 'jdb', name: 'Estación Juan de la Barrera', city: 'Zona Norte', manager: 'Laura Ponce' },
  { id: 'jm', name: 'Estación Jesús Michel', city: 'Zona Centro', manager: 'Ricardo Vega' },
  { id: 'ind', name: 'Estación Independencia', city: 'Zona Centro', manager: 'Sofía Ramírez' },
  { id: 'lm', name: 'Estación Los Maestros', city: 'Zona Sur', manager: 'Héctor Salinas' },
  { id: 'si', name: 'Estación San Ignacio', city: 'Zona Oriente', manager: 'Daniela Cruz' },
  { id: 'gn', name: 'Estación Guardia Nacional', city: 'Zona Poniente', manager: 'Andrés Molina' },
];

export const stationById = (id: string) => stations.find((s) => s.id === id);
