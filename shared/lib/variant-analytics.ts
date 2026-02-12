// Simple stub for variant analytics hooks
// These integrate with GATracking component

export function useCTATracking(ctaId: string, variant: string) {
  const trackClick = (ctaText: string, position: string) => {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'cta_click', {
        cta_text: ctaText,
        cta_position: position,
        variant: variant,
        cta_id: ctaId,
      });
    }
  };

  return { trackClick };
}

export function useVariantTracking(_experimentId: string, _variant?: string) {
  // Variant impression is already tracked by GATracking component
  // This is a no-op stub for compatibility
  return;
}
