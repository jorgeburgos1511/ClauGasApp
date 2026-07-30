import { useMemo, useState } from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { financeKpis } from '../data/financeKpis';
import { financeFlow } from '../data/financeFlow';
import { reconciliation } from '../data/reconciliation';
import { stations, stationById } from '../data/stations';
import type { ReconciliationStatus } from '../types';

const currency = (value: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);

const statusTone: Record<ReconciliationStatus, 'success' | 'warning' | 'danger'> = {
  conciliado: 'success',
  pendiente: 'warning',
  diferencia: 'danger',
};

const statusLabel: Record<ReconciliationStatus, string> = {
  conciliado: 'Conciliado',
  pendiente: 'Pendiente',
  diferencia: 'Diferencia',
};

const shortStationName = (id: string) => stationById(id)?.name.replace('Estación ', '') ?? id;

export function Finanzas() {
  const [stationFilter, setStationFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredRows = useMemo(
    () =>
      reconciliation.filter(
        (row) =>
          (stationFilter === 'all' || row.stationId === stationFilter) &&
          (statusFilter === 'all' || row.status === statusFilter),
      ),
    [stationFilter, statusFilter],
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {financeKpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </div>

      <Card title="Entradas, salidas y flujo neto" subtitle="Últimos 7 días, MXN">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={financeFlow} margin={{ left: 8, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip formatter={(value) => currency(Number(value))} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="entradas" name="Entradas" fill="#1E9E5A" radius={[6, 6, 0, 0]} />
            <Bar dataKey="salidas" name="Salidas" fill="#E5484D" radius={[6, 6, 0, 0]} />
            <Line type="monotone" dataKey="flujoNeto" name="Flujo neto" stroke="#0B2A4A" strokeWidth={2.5} dot={{ r: 3 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Conciliación bancaria"
        subtitle={`${filteredRows.length} de ${reconciliation.length} registros`}
        action={
          <div className="flex gap-2">
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
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 focus:border-[#2F6FED] focus:outline-none"
            >
              <option value="all">Todos los estados</option>
              <option value="conciliado">Conciliado</option>
              <option value="pendiente">Pendiente</option>
              <option value="diferencia">Diferencia</option>
            </select>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-gray-400">
                <th className="whitespace-nowrap py-2 pr-4 font-medium">ID</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Estación</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Fecha</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Monto banco</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Monto sistema</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Diferencia</th>
                <th className="whitespace-nowrap py-2 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRows.map((row) => (
                <tr key={row.id}>
                  <td className="whitespace-nowrap py-2.5 pr-4 font-mono text-xs text-gray-500">{row.id}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-700">{shortStationName(row.stationId)}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">{row.date}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">
                    {row.bankAmount === 0 ? '— sin reporte —' : currency(row.bankAmount)}
                  </td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{currency(row.systemAmount)}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">
                    {row.difference === 0 ? '—' : currency(row.difference)}
                  </td>
                  <td className="whitespace-nowrap py-2.5">
                    <Badge tone={statusTone[row.status]}>{statusLabel[row.status]}</Badge>
                  </td>
                </tr>
              ))}
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-sm text-gray-400">
                    No hay registros para este filtro.
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
