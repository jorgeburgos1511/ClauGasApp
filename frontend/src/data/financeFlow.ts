import type { FinanceFlowPoint } from '../types';

const raw: Array<[string, number, number]> = [
  ['24 Jul', 660000, 410000],
  ['25 Jul', 690000, 430000],
  ['26 Jul', 675000, 425000],
  ['27 Jul', 710000, 460000],
  ['28 Jul', 695000, 445000],
  ['29 Jul', 730000, 470000],
  ['30 Jul', 760000, 480000],
];

export const financeFlow: FinanceFlowPoint[] = raw.map(([date, entradas, salidas]) => ({
  date,
  entradas,
  salidas,
  flujoNeto: entradas - salidas,
}));
