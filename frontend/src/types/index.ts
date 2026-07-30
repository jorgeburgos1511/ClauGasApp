export type RoleId = 'director' | 'gerente' | 'administrador';

export interface Role {
  id: RoleId;
  label: string;
  description: string;
}

export interface User {
  name: string;
  role: RoleId;
}

export interface Station {
  id: string;
  name: string;
  city: string;
  manager: string;
}

export type StockStatus = 'ok' | 'bajo' | 'critico';

export type Product = 'Magna' | 'Premium' | 'Diesel' | 'Diésel Premium' | 'Gas LP';

export interface InventoryRow {
  stationId: string;
  product: Product;
  currentLiters: number;
  capacityLiters: number;
  status: StockStatus;
  lastRefill: string;
}

export interface Tank {
  id: string;
  stationId: string;
  tankNumber: number;
  product: Product;
  currentLiters: number;
  capacityLiters: number;
  minLiters: number;
  lastRefill: string;
}

export interface ConsumptionPoint {
  date: string;
  magna: number;
  premium: number;
  diesel: number;
}

export interface KpiCard {
  id: string;
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  tone: 'positive' | 'negative' | 'neutral';
}

export interface StationSalesPoint {
  stationId: string;
  ventas: number;
}

export interface TrendPoint {
  date: string;
  value: number;
}

export interface ProductMixPoint {
  product: string;
  value: number;
}

export interface SalesTransaction {
  id: string;
  date: string;
  time: string;
  stationId: string;
  product: Product;
  liters: number;
  amount: number;
  paymentMethod: 'Efectivo' | 'Tarjeta' | 'Vales';
}

export interface StationComparisonPoint {
  stationId: string;
  estaSemana: number;
  semanaAnterior: number;
}

export interface RequirementRow {
  id: string;
  stationId: string;
  description: string;
  priority: 'Alta' | 'Media' | 'Baja';
  status: 'Pendiente' | 'En proceso' | 'Resuelto';
  dueDate: string;
}

export type AlertSeverity = 'critica' | 'advertencia' | 'info';

export interface AlertRow {
  id: string;
  stationId: string;
  message: string;
  severity: AlertSeverity;
  timestamp: string;
}

export interface ComplianceModule {
  label: string;
  percentage: number;
}

export interface FinanceFlowPoint {
  date: string;
  entradas: number;
  salidas: number;
  flujoNeto: number;
}

export type ReconciliationStatus = 'conciliado' | 'pendiente' | 'diferencia';

export interface ReconciliationRow {
  id: string;
  stationId: string;
  date: string;
  bankAmount: number;
  systemAmount: number;
  difference: number;
  status: ReconciliationStatus;
}

export type PermitStatus = 'vigente' | 'por_vencer' | 'vencido';

export interface PermitRow {
  id: string;
  stationId: string;
  name: string;
  status: PermitStatus;
  issueDate: string;
  dueDate: string;
}

export interface PermitBreakdownPoint {
  status: PermitStatus;
  label: string;
  count: number;
}

export interface NavLeaf {
  label: string;
  path?: string;
  enabled: boolean;
}

export interface NavGroup {
  label: string;
  items: NavLeaf[];
}
