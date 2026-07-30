import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { executiveKpis } from '../data/kpis';
import { salesByStation } from '../data/salesByStation';
import { salesTrend7d } from '../data/salesTrend';
import { inventoryMix, inventoryMixColors } from '../data/inventoryMix';
import { complianceModules } from '../data/compliance';
import { requirements } from '../data/requirements';
import { alerts } from '../data/alerts';
import { stationById } from '../data/stations';
import type { AlertSeverity, RequirementRow } from '../types';

const currency = (value: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);

const priorityTone: Record<RequirementRow['priority'], 'danger' | 'warning' | 'neutral'> = {
  Alta: 'danger',
  Media: 'warning',
  Baja: 'neutral',
};

const statusTone: Record<RequirementRow['status'], 'accent' | 'warning' | 'success'> = {
  Pendiente: 'warning',
  'En proceso': 'accent',
  Resuelto: 'success',
};

const severityTone: Record<AlertSeverity, 'danger' | 'warning' | 'accent'> = {
  critica: 'danger',
  advertencia: 'warning',
  info: 'accent',
};

const severityLabel: Record<AlertSeverity, string> = {
  critica: 'Crítica',
  advertencia: 'Advertencia',
  info: 'Info',
};

export function ResumenEjecutivo() {
  const stationChartData = salesByStation.map((row) => ({
    name: stationById(row.stationId)?.name.replace('Estación ', '') ?? row.stationId,
    ventas: row.ventas,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {executiveKpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Ventas por estación" subtitle="Mes actual, MXN" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stationChartData} margin={{ left: 8, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} interval={0} angle={-15} textAnchor="end" height={50} />
              <YAxis tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`} tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Tooltip formatter={(value) => currency(Number(value))} />
              <Bar dataKey="ventas" fill="#2F6FED" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Inventario por producto" subtitle="Distribución actual">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={inventoryMix}
                dataKey="value"
                nameKey="product"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={2}
              >
                {inventoryMix.map((entry) => (
                  <Cell key={entry.product} fill={inventoryMixColors[entry.product]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${Number(value)}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 flex justify-center gap-4">
            {inventoryMix.map((entry) => (
              <div key={entry.product} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: inventoryMixColors[entry.product] }} />
                {entry.product}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Tendencia de ventas" subtitle="Últimos 7 días" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={salesTrend7d} margin={{ left: 8, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Tooltip formatter={(value) => currency(Number(value))} />
              <Line type="monotone" dataKey="value" stroke="#2F6FED" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Cumplimiento regulatorio" subtitle="Por módulo">
          <div className="space-y-4">
            {complianceModules.map((mod) => (
              <div key={mod.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-gray-600">{mod.label}</span>
                  <span className="font-semibold text-[#0B2A4A]">{mod.percentage}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${mod.percentage}%`,
                      backgroundColor: mod.percentage >= 85 ? '#1E9E5A' : mod.percentage >= 70 ? '#F2A93B' : '#E5484D',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card title="Requerimientos abiertos" subtitle="Prioridad y estado por estación">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-400">
                  <th className="whitespace-nowrap py-2 pr-3 font-medium">Estación</th>
                  <th className="whitespace-nowrap py-2 pr-3 font-medium">Descripción</th>
                  <th className="whitespace-nowrap py-2 pr-3 font-medium">Prioridad</th>
                  <th className="whitespace-nowrap py-2 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requirements.map((req) => (
                  <tr key={req.id}>
                    <td className="py-2.5 pr-3 text-gray-700">{stationById(req.stationId)?.name.replace('Estación ', '')}</td>
                    <td className="py-2.5 pr-3 text-gray-600">{req.description}</td>
                    <td className="whitespace-nowrap py-2.5 pr-3">
                      <Badge tone={priorityTone[req.priority]}>{req.priority}</Badge>
                    </td>
                    <td className="whitespace-nowrap py-2.5">
                      <Badge tone={statusTone[req.status]}>{req.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Alertas recientes" subtitle="Actividad de las últimas 48 horas">
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start justify-between gap-3 rounded-lg border border-gray-100 p-3">
                <div>
                  <p className="text-sm text-gray-700">{alert.message}</p>
                  <p className="mt-1 text-xs text-gray-400">
                    {stationById(alert.stationId)?.name} · {alert.timestamp}
                  </p>
                </div>
                <Badge tone={severityTone[alert.severity]}>{severityLabel[alert.severity]}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
