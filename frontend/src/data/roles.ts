import type { Role } from '../types';

export const roles: Role[] = [
  {
    id: 'director',
    label: 'Director General',
    description: 'Miguel Castro — visibilidad total de las 12 estaciones, finanzas y cumplimiento.',
  },
  {
    id: 'gerente',
    label: 'Gerente de Estación',
    description: 'Operación diaria: inventarios, ventas y requerimientos de su estación.',
  },
  {
    id: 'administrador',
    label: 'Administrador',
    description: 'Finanzas, conciliación bancaria y trámites regulatorios.',
  },
];
