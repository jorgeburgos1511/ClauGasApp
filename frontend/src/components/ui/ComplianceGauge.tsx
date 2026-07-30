const SIZE = 180;
const STROKE = 16;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function gaugeColor(percentage: number) {
  if (percentage >= 80) return '#1E9E5A';
  if (percentage >= 50) return '#F2A93B';
  return '#E5484D';
}

export function ComplianceGauge({ percentage, caption }: { percentage: number; caption: string }) {
  const clamped = Math.min(100, Math.max(0, percentage));
  const offset = CIRCUMFERENCE * (1 - clamped / 100);
  const color = gaugeColor(clamped);

  return (
    <div className="flex flex-col items-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} fill="none" stroke="#F3F4F6" strokeWidth={STROKE} />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
        <text x="50%" y="47%" textAnchor="middle" fontSize={36} fontWeight={700} fill="#0B2A4A">
          {clamped}%
        </text>
        <text x="50%" y="63%" textAnchor="middle" fontSize={13} fill="#6b7280">
          {caption}
        </text>
      </svg>
    </div>
  );
}
