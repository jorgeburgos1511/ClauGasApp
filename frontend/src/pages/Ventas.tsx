import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
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
import { salesKpis } from '../data/salesKpis';
import { salesWeeklyTrend } from '../data/salesWeeklyTrend';
import { salesProductMix, salesProductMixColors } from '../data/salesProductMix';
import { salesStationComparison } from '../data/salesStationComparison';
import { salesTransactions } from '../data/salesTransactions';
import { stations, stationById } from '../data/stations';
import { allProducts, stationProductMap } from '../lib/catalog';
import type { SalesTransaction } from '../types';

const currency = (value: number) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);

const paymentTone: Record<SalesTransaction['paymentMethod'], 'success' | 'accent' | 'warning'> = {
  Efectivo: 'success',
  Tarjeta: 'accent',
  Vales: 'warning',
};

const shortStationName = (id: string) => stationById(id)?.name.replace('Estación ', '') ?? id;

export function Ventas() {
  const [stationFilter, setStationFilter] = useState<string>('all');
  const [productFilter, setProductFilter] = useState<string>('all');

  const availableProducts = stationFilter === 'all' ? allProducts : stationProductMap[stationFilter] ?? [];

  const handleStationChange = (value: string) => {
    setStationFilter(value);
    setProductFilter('all');
  };

  const filteredTransactions = useMemo(
    () =>
      salesTransactions.filter(
        (tx) =>
          (stationFilter === 'all' || tx.stationId === stationFilter) &&
          (productFilter === 'all' || tx.product === productFilter),
      ),
    [stationFilter, productFilter],
  );

  const comparisonChartData = salesStationComparison.map((row) => ({
    name: shortStationName(row.stationId),
    'Esta semana': row.estaSemana,
    'Semana anterior': row.semanaAnterior,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {salesKpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </div>

      <Card
        title="Filtros"
        action={
          <div className="flex gap-2">
            <select
              value={stationFilter}
              onChange={(e) => handleStationChange(e.target.value)}
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
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 focus:border-[#2F6FED] focus:outline-none"
            >
              <option value="all">Todos los productos</option>
              {availableProducts.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
        }
      >
        <p className="text-xs text-gray-400">
          Los filtros aplican a la tabla de transacciones recientes. Diésel Premium y Gas LP solo aparecen para las
          estaciones que los manejan.
        </p>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Tendencia semanal" subtitle="Ventas totales por día, MXN" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesWeeklyTrend} margin={{ left: 8, right: 8 }}>
              <defs>
                <linearGradient id="salesTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2F6FED" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#2F6FED" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Tooltip formatter={(value: number) => currency(value)} />
              <Area type="monotone" dataKey="value" stroke="#2F6FED" strokeWidth={2.5} fill="url(#salesTrendFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Mix por producto" subtitle="% de ventas de la semana">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={salesProductMix} dataKey="value" nameKey="product" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {salesProductMix.map((entry) => (
                  <Cell key={entry.product} fill={salesProductMixColors[entry.product]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1.5">
            {salesProductMix.map((entry) => (
              <div key={entry.product} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: salesProductMixColors[entry.product] }} />
                {entry.product}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Comparativo por estación" subtitle="Semana actual vs. semana anterior, MXN">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={comparisonChartData} margin={{ left: 8, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} interval={0} angle={-15} textAnchor="end" height={50} />
            <YAxis tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`} tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip formatter={(value: number) => currency(value)} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="Esta semana" fill="#2F6FED" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Semana anterior" fill="#D1D5DB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Transacciones recientes"
        subtitle={`${filteredTransactions.length} de ${salesTransactions.length} transacciones`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-gray-400">
                <th className="whitespace-nowrap py-2 pr-4 font-medium">ID</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Estación</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Producto</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Litros</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Importe</th>
                <th className="whitespace-nowrap py-2 pr-4 font-medium">Hora</th>
                <th className="whitespace-nowrap py-2 font-medium">Forma de pago</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="whitespace-nowrap py-2.5 pr-4 font-mono text-xs text-gray-500">{tx.id}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-700">{shortStationName(tx.stationId)}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{tx.product}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{tx.liters.toFixed(1)} L</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-600">{currency(tx.amount)}</td>
                  <td className="whitespace-nowrap py-2.5 pr-4 text-gray-500">{tx.time}</td>
                  <td className="whitespace-nowrap py-2.5">
                    <Badge tone={paymentTone[tx.paymentMethod]}>{tx.paymentMethod}</Badge>
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-sm text-gray-400">
                    No hay transacciones para este filtro.
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
