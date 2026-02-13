import React from 'react';
import { gtag } from '@/utils/ga';

interface EnhancedCTAProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  badge?: string;
  disabled?: boolean;
}

export default function EnhancedCTA({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  badge,
  disabled = false,
}: EnhancedCTAProps) {
  const handleClick = () => {
    gtag('event', 'cta_click', {
      cta_text: text,
      cta_variant: variant,
      cta_location: 'page',
    });

    if (onClick) onClick();
  };

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href } : { type: 'button' as const, onClick: handleClick };

  return (
    <div className="enhanced-cta-wrapper">
      <Component
        {...componentProps}
        className={`enhanced-cta variant-${variant} size-${size} ${fullWidth ? 'full-width' : ''} ${
          disabled ? 'disabled' : ''
        }`}
        disabled={disabled}
      >
        {icon && <span className="cta-icon">{icon}</span>}
        <span className="cta-text">{text}</span>
        {badge && <span className="cta-badge">{badge}</span>}
      </Component>

      <style jsx>{`
        .enhanced-cta-wrapper {
          display: inline-block;
          width: ${fullWidth ? '100%' : 'auto'};
        }

        .enhanced-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
          width: ${fullWidth ? '100%' : 'auto'};
          min-height: 48px;
        }

        .enhanced-cta:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Variants */
        .variant-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .variant-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        }

        .variant-secondary {
          background: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;
        }

        .variant-secondary:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.1);
        }

        .variant-tertiary {
          background: transparent;
          color: #6b7280;
          text-decoration: underline;
          padding: 8px 16px;
        }

        .variant-tertiary:hover:not(:disabled) {
          color: #3b82f6;
        }

        /* Sizes */
        .size-sm {
          padding: 8px 16px;
          font-size: 14px;
          min-height: 40px;
        }

        .size-lg {
          padding: 16px 32px;
          font-size: 18px;
          min-height: 56px;
        }

        .cta-icon {
          font-size: 20px;
        }

        .cta-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: 4px;
        }

        @media (max-width: 640px) {
          .enhanced-cta {
            width: ${fullWidth ? '100%' : 'auto'};
            padding: 12px 20px;
            font-size: 15px;
          }

          .size-lg {
            padding: 14px 24px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
