import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { TankCard } from '../components/ui/TankCard';
import { inventoryKpis } from '../data/inventoryKpis';
import { tanks } from '../data/tanks';
import { inventoryTable } from '../data/inventoryTable';
import { consumptionTrend } from '../data/consumptionTrend';
import { stations, stationById } from '../data/stations';
import type { StockStatus } from '../types';

const statusTone: Record<StockStatus, 'success' | 'warning' | 'danger'> = {
  ok: 'success',
  bajo: 'warning',
  critico: 'danger',
};

const statusLabelEs: Record<StockStatus, string> = {
  ok: 'Normal',
  bajo: 'Bajo',
  critico: 'Crítico',
};

export function Inventarios() {
  const [selectedStation, setSelectedStation] = useState(stations[0].id);
  const stationTanks = tanks.filter((t) => t.stationId === selectedStation);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {inventoryKpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </div>

      <Card
        title="Tanques por estación"
        subtitle="Nivel actual de cada tanque físico"
        action={
          <select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 focus:border-[#2F6FED] focus:outline-none"
          >
            {stations.map((station) => (
              <option key={station.id} value={station.id}>
                {station.name}
              </option>
            ))}
          </select>
        }
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stationTanks.map((tank) => (
            <TankCard key={tank.id} tank={tank} />
          ))}
        </div>
      </Card>

      <Card title="Tendencia de consumo" subtitle="Litros despachados por día, últimos 14 días">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={consumptionTrend} margin={{ left: 8, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip formatter={(value: number) => `${value.toLocaleString('es-MX')} L`} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="magna" name="Magna" stroke="#2F6FED" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="premium" name="Premium" stroke="#1E9E5A" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="diesel" name="Diesel" stroke="#F2A93B" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Inventario por estación y producto" subtitle="Consolidado de todos los tanques">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-gray-400">
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Estación</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Producto</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Litros actuales</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Capacidad</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Último abasto</th>
                <th className="whitespace-nowrap py-2 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventoryTable
                .slice()
                .sort((a, b) => (stationById(a.stationId)?.name ?? '').localeCompare(stationById(b.stationId)?.name ?? ''))
                .map((row) => (
                  <tr key={`${row.stationId}-${row.product}`}>
                    <td className="whitespace-nowrap py-2.5 pr-4 text-gray-700">
                      {stationById(row.stationId)?.name.replace('Estación ', '')}
                    </td>
                    <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{row.product}</td>
                    <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">
                      {row.currentLiters.toLocaleString('es-MX')} L
                    </td>
                    <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">
                      {row.capacityLiters.toLocaleString('es-MX')} L
                    </td>
                    <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">{row.lastRefill}</td>
                    <td className="whitespace-nowrap py-2.5">
                      <Badge tone={statusTone[row.status]}>{statusLabelEs[row.status]}</Badge>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
