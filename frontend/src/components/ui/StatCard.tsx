import type { KpiCard } from '../../types';

const toneClasses: Record<KpiCard['tone'], string> = {
  positive: 'text-[#1E9E5A] bg-[#1E9E5A]/10',
  negative: 'text-[#E5484D] bg-[#E5484D]/10',
  neutral: 'text-gray-500 bg-gray-100',
};

const accentClasses: Record<KpiCard['tone'], string> = {
  positive: 'bg-[#1E9E5A]',
  negative: 'bg-[#E5484D]',
  neutral: 'bg-gray-300',
};

const toneSign: Record<KpiCard['tone'], string> = {
  positive: '▲',
  negative: '▼',
  neutral: '—',
};

export function StatCard({ label, value, delta, deltaLabel, tone }: KpiCard) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <span className={`absolute inset-y-0 left-0 w-1 ${accentClasses[tone]}`} aria-hidden="true" />
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#0B2A4A]">{value}</p>
      <p className={`mt-3 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${toneClasses[tone]}`}>
        <span>{toneSign[tone]}</span>
        <span>
          {Math.abs(delta)}% {deltaLabel}
        </span>
      </p>
    </div>
  );
}
