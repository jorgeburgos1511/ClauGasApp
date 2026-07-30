import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ComplianceGauge } from '../components/ui/ComplianceGauge';
import { permits } from '../data/permits';
import { permitsBreakdown, compliancePercentage } from '../data/permitsBreakdown';
import { stations, stationById } from '../data/stations';
import type { PermitStatus } from '../types';

const statusTone: Record<PermitStatus, 'success' | 'warning' | 'danger'> = {
  vigente: 'success',
  por_vencer: 'warning',
  vencido: 'danger',
};

const statusLabel: Record<PermitStatus, string> = {
  vigente: 'Vigente',
  por_vencer: 'Por vencer',
  vencido: 'Vencido',
};

const statusColor: Record<PermitStatus, string> = {
  vigente: '#1E9E5A',
  por_vencer: '#F2A93B',
  vencido: '#E5484D',
};

const shortStationName = (id: string) => stationById(id)?.name.replace('Estación ', '') ?? id;

export function Tramites() {
  const [stationFilter, setStationFilter] = useState<string>('all');

  const filteredPermits = useMemo(
    () =>
      permits
        .filter((p) => stationFilter === 'all' || p.stationId === stationFilter)
        .slice()
        .sort((a, b) => a.dueDate.localeCompare(b.dueDate)),
    [stationFilter],
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Cumplimiento regulatorio" subtitle="% de trámites vigentes">
          <div className="flex justify-center py-2">
            <ComplianceGauge percentage={compliancePercentage} caption="vigentes" />
          </div>
        </Card>

        <Card title="Desglose por estado" subtitle="Trámites y permisos por estatus" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={permitsBreakdown} layout="vertical" margin={{ left: 16, right: 24 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
              <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis type="category" dataKey="label" tick={{ fontSize: 12, fill: '#374151' }} width={90} />
              <Tooltip />
              <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={28}>
                {permitsBreakdown.map((entry) => (
                  <Cell key={entry.status} fill={statusColor[entry.status]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card
        title="Vencimientos"
        subtitle={`${filteredPermits.length} de ${permits.length} trámites, ordenados por fecha de vencimiento`}
        action={
          <select
            value={stationFilter}
            onChange={(e) => setStationFilter(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 focus:border-[#2F6FED] focus:outline-none"
          >
            <option value="all">Todas las estaciones</option>
            {stations.map((station) => (
              <option key={station.id} value={station.id}>
                {station.name}
              </option>
            ))}
          </select>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-gray-400">
                <th className="whitespace-nowrap py-2 pr-4 font-medium">ID</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Estación</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Trámite</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Emisión</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Vencimiento</th>
                <th className="whitespace-nowrap py-2 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPermits.map((permit) => (
                <tr key={permit.id}>
                  <td className="whitespace-nowrap py-2.5 pr-4 font-mono text-xs text-gray-500">{permit.id}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-700">{shortStationName(permit.stationId)}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{permit.name}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">{permit.issueDate}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">{permit.dueDate}</td>
                  <td className="whitespace-nowrap py-2.5">
                    <Badge tone={statusTone[permit.status]}>{statusLabel[permit.status]}</Badge>
                  </td>
                </tr>
              ))}
              {filteredPermits.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-sm text-gray-400">
                    No hay trámites para este filtro.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
