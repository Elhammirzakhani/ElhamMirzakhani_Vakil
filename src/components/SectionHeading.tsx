import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, eyebrow, title, lead }) => (
  <Reveal className="max-w-2xl space-y-3 text-right">
    <span className="eyebrow">{eyebrow}</span>
    <h2 id={id} className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.25] text-ink">
      {title}
    </h2>
    {lead && <p className="text-sm sm:text-base leading-8 text-muted">{lead}</p>}
  </Reveal>
);
