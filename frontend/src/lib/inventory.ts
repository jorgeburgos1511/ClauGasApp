import type { StockStatus, Tank } from '../types';

export function tankPercentage(tank: Tank): number {
  return Math.round((tank.currentLiters / tank.capacityLiters) * 100);
}

export function tankStatus(tank: Tank): StockStatus {
  if (tank.currentLiters < tank.minLiters) return 'critico';
  if (tank.currentLiters < tank.capacityLiters * 0.4) return 'bajo';
  return 'ok';
}

export const statusLabel: Record<StockStatus, string> = {
  ok: 'Normal',
  bajo: 'Bajo',
  critico: 'Crítico',
};

export const statusColor: Record<StockStatus, string> = {
  ok: '#1E9E5A',
  bajo: '#F2A93B',
  critico: '#E5484D',
};
