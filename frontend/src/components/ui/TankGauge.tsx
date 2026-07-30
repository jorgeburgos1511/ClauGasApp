import { useEffect, useId, useState } from 'react';
import { statusColor } from '../../lib/inventory';
import type { StockStatus } from '../../types';

interface TankGaugeProps {
  percentage: number;
  status: StockStatus;
}

const TANK_X = 12;
const TANK_Y = 8;
const TANK_W = 56;
const TANK_H = 136;
const RADIUS = TANK_W / 2;
const FILL_TRANSITION = 'height 700ms cubic-bezier(0.22,1,0.36,1), y 700ms cubic-bezier(0.22,1,0.36,1)';

export function TankGauge({ percentage, status }: TankGaugeProps) {
  const clampedPct = Math.min(100, Math.max(0, percentage));
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPct(clampedPct), 30);
    return () => clearTimeout(timer);
  }, [clampedPct]);

  const fillHeight = (animatedPct / 100) * TANK_H;
  const fillY = TANK_Y + TANK_H - fillHeight;
  const color = statusColor[status];
  const uid = useId();
  const clipId = `tank-clip-${uid}`;
  const gradientId = `tank-fill-${uid}`;
  const shadowId = `tank-shadow-${uid}`;

  return (
    <svg
      viewBox="0 0 80 160"
      className="h-36 w-16 overflow-visible"
      role="img"
      aria-label={`Nivel de tanque: ${clampedPct}%`}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={TANK_X} y={TANK_Y} width={TANK_W} height={TANK_H} rx={RADIUS} />
        </clipPath>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.78} />
          <stop offset="100%" stopColor={color} stopOpacity={1} />
        </linearGradient>
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.4" floodColor="#0B2A4A" floodOpacity="0.18" />
        </filter>
      </defs>

      <rect x={TANK_X} y={TANK_Y} width={TANK_W} height={TANK_H} rx={RADIUS} fill="#F3F4F6" />

      <g clipPath={`url(#${clipId})`}>
        <rect
          x={TANK_X}
          y={fillY}
          width={TANK_W}
          height={fillHeight}
          fill={`url(#${gradientId})`}
          style={{ transition: FILL_TRANSITION }}
        />
        {animatedPct > 0 && (
          <rect
            x={TANK_X}
            y={fillY}
            width={TANK_W}
            height={4}
            fill="white"
            fillOpacity={0.4}
            style={{ transition: 'y 700ms cubic-bezier(0.22,1,0.36,1)' }}
          />
        )}
        {/* brillo lateral tipo vidrio, decorativo */}
        <rect x={TANK_X + 6} y={TANK_Y} width={6} height={TANK_H} rx={3} fill="white" fillOpacity={0.15} />
      </g>

      <rect
        x={TANK_X}
        y={TANK_Y}
        width={TANK_W}
        height={TANK_H}
        rx={RADIUS}
        fill="none"
        stroke="#9CA3AF"
        strokeWidth={2.5}
        filter={`url(#${shadowId})`}
      />

      {/* marcas de referencia 25/50/75% */}
      {[0.25, 0.5, 0.75].map((mark) => (
        <line
          key={mark}
          x1={TANK_X}
          x2={TANK_X + 6}
          y1={TANK_Y + TANK_H * (1 - mark)}
          y2={TANK_Y + TANK_H * (1 - mark)}
          stroke="#D1D5DB"
          strokeWidth={1.5}
        />
      ))}

      <text
        x={40}
        y={TANK_Y + TANK_H / 2 + 6}
        textAnchor="middle"
        fontSize={17}
        fontWeight={700}
        fill={animatedPct > 45 ? 'white' : '#1f2937'}
        style={{ transition: 'fill 400ms ease' }}
      >
        {clampedPct}%
      </text>
    </svg>
  );
}
