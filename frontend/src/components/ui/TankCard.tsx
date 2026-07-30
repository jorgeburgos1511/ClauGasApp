import type { Tank } from '../../types';
import { tankPercentage, tankStatus, statusLabel } from '../../lib/inventory';
import { TankGauge } from './TankGauge';
import { Badge } from './Badge';

const badgeTone = { ok: 'success', bajo: 'warning', critico: 'danger' } as const;

export function TankCard({ tank }: { tank: Tank }) {
  const percentage = tankPercentage(tank);
  const status = tankStatus(tank);

  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
      <div className="mb-2 flex w-full items-center justify-between">
        <span className="text-xs font-semibold text-gray-400">Tanque {tank.tankNumber}</span>
        {status !== 'ok' && <Badge tone={badgeTone[status]}>{statusLabel[status]}</Badge>}
      </div>

      <TankGauge percentage={percentage} status={status} />

      <p className="mt-2 text-sm font-semibold text-[#0B2A4A]">{tank.product}</p>
      <p className="mt-1 text-xs text-gray-500">
        {tank.currentLiters.toLocaleString('es-MX')} L / {tank.capacityLiters.toLocaleString('es-MX')} L
      </p>
    </div>
  );
}
