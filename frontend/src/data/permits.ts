import type { PermitRow } from '../types';

export const permits: PermitRow[] = [
  { id: 'PER-001', stationId: 'jdb', name: 'Licencia de Funcionamiento', status: 'vigente', issueDate: '2024-01-15', dueDate: '2027-01-15' },
  { id: 'PER-002', stationId: 'jdb', name: 'Licencia Única Ambiental', status: 'por_vencer', issueDate: '2023-08-10', dueDate: '2026-08-20' },
  { id: 'PER-003', stationId: 'jdb', name: 'Uso de Suelo', status: 'vigente', issueDate: '2022-11-05', dueDate: '2027-11-05' },
  { id: 'PER-004', stationId: 'jm', name: 'Protección Civil', status: 'vigente', issueDate: '2024-03-01', dueDate: '2027-03-01' },
  { id: 'PER-005', stationId: 'jm', name: 'Verificación de Tanques', status: 'vigente', issueDate: '2024-06-01', dueDate: '2027-06-01' },
  { id: 'PER-006', stationId: 'ind', name: 'Licencia de Funcionamiento', status: 'vigente', issueDate: '2024-05-20', dueDate: '2027-05-20' },
  { id: 'PER-007', stationId: 'ind', name: 'Licencia Única Ambiental', status: 'vigente', issueDate: '2024-06-01', dueDate: '2027-06-01' },
  { id: 'PER-008', stationId: 'ind', name: 'Uso de Suelo', status: 'por_vencer', issueDate: '2023-08-15', dueDate: '2026-08-15' },
  { id: 'PER-009', stationId: 'lm', name: 'Protección Civil', status: 'vencido', issueDate: '2023-07-01', dueDate: '2026-07-01' },
  { id: 'PER-010', stationId: 'lm', name: 'Constancia de Seguridad e Higiene', status: 'vigente', issueDate: '2024-02-10', dueDate: '2027-02-10' },
  { id: 'PER-011', stationId: 'si', name: 'Licencia de Funcionamiento', status: 'vigente', issueDate: '2024-04-18', dueDate: '2027-04-18' },
  { id: 'PER-012', stationId: 'si', name: 'Verificación de Tanques', status: 'vigente', issueDate: '2024-08-25', dueDate: '2027-08-25' },
  { id: 'PER-013', stationId: 'gn', name: 'Licencia Única Ambiental', status: 'vigente', issueDate: '2024-06-01', dueDate: '2027-06-01' },
  { id: 'PER-014', stationId: 'gn', name: 'Protección Civil', status: 'por_vencer', issueDate: '2023-08-05', dueDate: '2026-08-28' },
];
