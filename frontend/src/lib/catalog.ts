import { tanks } from '../data/tanks';
import type { Product } from '../types';

/**
 * Productos disponibles por estación, derivado de los tanques físicos
 * (tanks.ts) para que Ventas nunca se desalinee de lo que Inventarios reporta.
 */
export const stationProductMap: Record<string, Product[]> = tanks.reduce<Record<string, Product[]>>((acc, tank) => {
  if (!acc[tank.stationId]) acc[tank.stationId] = [];
  if (!acc[tank.stationId].includes(tank.product)) acc[tank.stationId].push(tank.product);
  return acc;
}, {});

export const allProducts: Product[] = Array.from(new Set(tanks.map((t) => t.product)));
