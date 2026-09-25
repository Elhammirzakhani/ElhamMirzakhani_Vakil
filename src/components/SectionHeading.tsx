import React from 'react';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, eyebrow, title, lead }) => (
  <div className="max-w-2xl space-y-2.5 text-right">
    <span className="eyebrow">{eyebrow}</span>
    <h2 id={id} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.35] text-ink">
      {title}
    </h2>
    {lead && <p className="text-sm sm:text-base leading-7 sm:leading-8 text-muted">{lead}</p>}
  </div>
);
