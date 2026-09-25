import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/** Compact label/value card used for credentials, location and working hours. */
export const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, label, value, hint, onClick, className = '' }) => {
  const body = (
    <>
      <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gold-wash text-gold flex items-center justify-center ring-1 ring-gold-bright/30">
        <Icon className="w-5 h-5" strokeWidth={1.6} />
      </span>
      <span className="min-w-0 text-right">
        <span className="block text-xs text-gold font-medium">{label}</span>
        <span className="block mt-0.5 text-sm font-bold text-ink leading-6">{value}</span>
        {hint && <span className="block text-xs text-subtle">{hint}</span>}
      </span>
    </>
  );

  const base = `flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-surface p-3 sm:p-3.5 ring-1 ring-line shadow-soft ${className}`;

  return onClick ? (
    <button type="button" onClick={onClick} className={`${base} w-full transition-[box-shadow,transform] duration-200 hover:shadow-lift hover:-translate-y-0.5`}>
      {body}
    </button>
  ) : (
    <div className={base}>{body}</div>
  );
};
