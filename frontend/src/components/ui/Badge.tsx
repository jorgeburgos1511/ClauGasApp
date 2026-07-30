type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral' | 'accent';

const toneClasses: Record<BadgeTone, string> = {
  success: 'bg-[#1E9E5A]/10 text-[#1E9E5A] ring-1 ring-inset ring-[#1E9E5A]/20',
  warning: 'bg-[#F2A93B]/15 text-[#B7791F] ring-1 ring-inset ring-[#F2A93B]/25',
  danger: 'bg-[#E5484D]/10 text-[#E5484D] ring-1 ring-inset ring-[#E5484D]/20',
  neutral: 'bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-200',
  accent: 'bg-[#2F6FED]/10 text-[#2F6FED] ring-1 ring-inset ring-[#2F6FED]/20',
};

export function Badge({ tone = 'neutral', children }: { tone?: BadgeTone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${toneClasses[tone]}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" aria-hidden="true" />
      {children}
    </span>
  );
}
