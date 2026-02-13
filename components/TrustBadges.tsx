import React, { useState } from 'react';
import { gtag } from '@/utils/ga';

interface TrustBadgesProps {
  variant: 'dark' | 'light';
}

export default function TrustBadges({ variant = 'dark' }: TrustBadgesProps) {
  const badges = [
    { icon: '✓', label: 'Verified Results', color: variant === 'dark' ? '#10b981' : '#059669' },
    { icon: '🔒', label: 'Secure & Private', color: variant === 'dark' ? '#3b82f6' : '#2563eb' },
    { icon: '⭐', label: '4.9★ Rated', color: variant === 'dark' ? '#f59e0b' : '#d97706' },
  ];

  return (
    <div className="trust-badges-container">
      <div className="badges-grid">
        {badges.map((badge) => (
          <div key={badge.label} className="badge" style={{ '--badge-color': badge.color } as any}>
            <span className="badge-icon">{badge.icon}</span>
            <span className="badge-label">{badge.label}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .trust-badges-container {
          margin: 24px 0;
        }
        
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
        }
        
        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(var(--badge-color), 0.1);
          border: 1px solid var(--badge-color);
        }
        
        .badge-icon {
          font-size: 18px;
        }
        
        .badge-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--badge-color);
        }
        
        @media (max-width: 640px) {
          .badges-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
