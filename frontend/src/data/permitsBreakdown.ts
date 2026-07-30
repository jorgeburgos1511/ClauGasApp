import type { PermitBreakdownPoint, PermitStatus } from '../types';
import { permits } from './permits';

const labels: Record<PermitStatus, string> = {
  vigente: 'Vigentes',
  por_vencer: 'Por vencer',
  vencido: 'Vencidos',
};

const order: PermitStatus[] = ['vigente', 'por_vencer', 'vencido'];

export const permitsBreakdown: PermitBreakdownPoint[] = order.map((status) => ({
  status,
  label: labels[status],
  count: permits.filter((p) => p.status === status).length,
}));

export const compliancePercentage = Math.round(
  (permits.filter((p) => p.status === 'vigente').length / permits.length) * 100,
);
