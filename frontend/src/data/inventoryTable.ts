import type { InventoryRow } from '../types';
import { tanks } from './tanks';
import { tankStatus } from '../lib/inventory';

/**
 * Tabla por estación/producto derivada de los tanques individuales (tanks.ts).
 * Al conectar a SQL Server, este archivo se reemplaza por la llamada al
 * endpoint de resumen de inventario; tanks.ts seguiría siendo el detalle por tanque.
 */
export const inventoryTable: InventoryRow[] = Object.values(
  tanks.reduce<Record<string, InventoryRow & { statuses: string[] }>>((acc, tank) => {
    const key = `${tank.stationId}-${tank.product}`;
    const status = tankStatus(tank);
    if (!acc[key]) {
      acc[key] = {
        stationId: tank.stationId,
        product: tank.product,
        currentLiters: 0,
        capacityLiters: 0,
        status: 'ok',
        lastRefill: tank.lastRefill,
        statuses: [],
      };
    }
    acc[key].currentLiters += tank.currentLiters;
    acc[key].capacityLiters += tank.capacityLiters;
    acc[key].statuses.push(status);
    if (tank.lastRefill > acc[key].lastRefill) acc[key].lastRefill = tank.lastRefill;
    return acc;
  }, {}),
).map((row) => {
  const worst = row.statuses.includes('critico') ? 'critico' : row.statuses.includes('bajo') ? 'bajo' : 'ok';
  const { statuses: _statuses, ...rest } = row;
  return { ...rest, status: worst } satisfies InventoryRow;
});
