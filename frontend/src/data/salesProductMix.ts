import type { ProductMixPoint } from '../types';

// Mezcla de ventas por producto a nivel compañía. Diésel Premium y Gas LP
// pesan menos porque solo se venden en las estaciones que los manejan.
export const salesProductMix: ProductMixPoint[] = [
  { product: 'Magna', value: 45 },
  { product: 'Diesel', value: 24 },
  { product: 'Premium', value: 20 },
  { product: 'Diésel Premium', value: 7 },
  { product: 'Gas LP', value: 4 },
];

export const salesProductMixColors: Record<string, string> = {
  Magna: '#2F6FED',
  Premium: '#1E9E5A',
  Diesel: '#F2A93B',
  'Diésel Premium': '#0B2A4A',
  'Gas LP': '#E5484D',
};
