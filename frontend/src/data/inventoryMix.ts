import type { ProductMixPoint } from '../types';

export const inventoryMix: ProductMixPoint[] = [
  { product: 'Magna', value: 48 },
  { product: 'Premium', value: 22 },
  { product: 'Diesel', value: 30 },
];

export const inventoryMixColors: Record<string, string> = {
  Magna: '#2F6FED',
  Premium: '#1E9E5A',
  Diesel: '#F2A93B',
};
