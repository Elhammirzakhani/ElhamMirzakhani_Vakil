import React from 'react';
import { businessConfig } from '../config/business';

interface PortraitProps {
  className?: string;
  sizes: string;
}

/** Responsive, preloaded hero portrait (WebP with JPEG fallback). */
export const Portrait: React.FC<PortraitProps> = ({ className = '', sizes }) => {
  const { attorney, contact } = businessConfig;
  return (
    <picture>
      <source type="image/webp" srcSet={attorney.portrait.srcSet} sizes={sizes} />
      <img
        src={attorney.portrait.fallbackSrc}
        alt={`${attorney.fullName}، ${attorney.title} در ${contact.city}، در دفتر وکالت`}
        width={attorney.portrait.width}
        height={attorney.portrait.height}
        fetchPriority="high"
        decoding="async"
        className={className}
      />
    </picture>
  );
};
