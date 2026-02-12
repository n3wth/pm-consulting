'use client';

import { useEffect } from 'react';

// GA4 Measurement ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PLACEHOLDER';

export default function GATracking() {
  useEffect(() => {
    const gtag = (window as any).gtag;
    
    // Initialize tracking timestamps
    (window as any).PAGE_LOAD_TIME = Date.now();
    (window as any).FORM_ERROR_COUNT = 0;
    (window as any).INTERACTION_COUNT = 0;

    // Determine A/B variant (50/50 split based on session)
    if (!(window as any).AB_VARIANT) {
      const sessionVariant = sessionStorage.getItem('ab_variant');
      if (sessionVariant) {
        (window as any).AB_VARIANT = sessionVariant;
      } else {
        const variant = Math.random() < 0.5 ? 'A' : 'B';
        (window as any).AB_VARIANT = variant;
        sessionStorage.setItem('ab_variant', variant);
      }
    }

    // Helper functions
    const isReturningVisitor = () => {
      return localStorage.getItem('visited') === 'true';
    };

    const getDeviceCategory = () => {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    // Track variant impression on page load
    if (gtag) {
      gtag('event', 'variant_impression', {
        variant: (window as any).AB_VARIANT,
        site: 'pm-consulting',
        page_type: 'landing',
        user_type: isReturningVisitor() ? 'returning' : 'new',
        device_category: getDeviceCategory(),
      });

      // Mark as visited
      localStorage.setItem('visited', 'true');
    }

    // Track form field focus
    const trackFormFocus = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      const form = target.closest('form');
      
      if (form && gtag) {
        gtag('event', 'form_field_focus', {
          field_name: target.name || 'unknown',
          form_id: form.id || 'unknown',
          variant: (window as any).AB_VARIANT,
          time_to_focus_sec: Math.round((Date.now() - ((window as any).PAGE_LOAD_TIME || Date.now())) / 1000),
        });

        // Set form start time on first field focus
        if (!(window as any).FORM_START_TIME) {
          (window as any).FORM_START_TIME = Date.now();
        }
      }
    };

    // Track CTA clicks
    const trackCTAClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('.cta-button, .btn-primary, .btn-secondary, button[data-cta]');
      
      if (button && gtag) {
        const element = button as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        
        gtag('event', 'cta_click', {
          cta_text: element.textContent?.trim() || 'unknown',
          cta_position: element.getAttribute('data-position') || 'unknown',
          cta_color: computedStyle.backgroundColor,
          cta_size: element.getAttribute('data-size') || 'medium',
          link_destination: (element as HTMLAnchorElement).href || element.getAttribute('data-href') || 'unknown',
        });
      }
    };

    // Track scroll depth
    let depthsTracked = new Set<number>();
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      [25, 50, 75, 90].forEach((threshold) => {
        if (scrollPercent >= threshold && !depthsTracked.has(threshold) && gtag) {
          depthsTracked.add(threshold);
          gtag('event', 'scroll_depth', {
            depth_percent: threshold,
            time_to_depth_sec: Math.round((Date.now() - ((window as any).PAGE_LOAD_TIME || Date.now())) / 1000),
            variant: (window as any).AB_VARIANT,
          });
        }
      });
    };

    // Track exit intent
    let exitTracked = false;
    const trackExitIntent = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (!exitTracked && mouseEvent.clientY < 10 && gtag) {
        exitTracked = true;
        const scrollMax = Math.round((window.scrollY / document.body.scrollHeight) * 100);
        gtag('event', 'exit_intent', {
          time_on_page_sec: Math.round((Date.now() - ((window as any).PAGE_LOAD_TIME || Date.now())) / 1000),
          scroll_depth_at_exit: scrollMax,
          forms_interacted: !!document.querySelector('input:focus, textarea:focus'),
        });
      }
    };

    // Track bounce on page unload
    const trackBounce = () => {
      const timeOnPage = Math.round((Date.now() - ((window as any).PAGE_LOAD_TIME || Date.now())) / 1000);
      const interactions = (window as any).INTERACTION_COUNT || 0;
      const scrollMax = Math.round((window.scrollY / document.body.scrollHeight) * 100);

      if (timeOnPage < 10 && scrollMax < 25 && interactions === 0 && gtag) {
        gtag('event', 'bounce', {
          time_on_page_sec: timeOnPage,
          interactions,
          scroll_max_percent: scrollMax,
        });
      }
    };

    // Track general interactions
    const trackInteraction = () => {
      (window as any).INTERACTION_COUNT = ((window as any).INTERACTION_COUNT || 0) + 1;
    };

    // Attach event listeners
    document.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('focus', trackFormFocus as EventListener, { once: true });
    });

    document.addEventListener('click', trackCTAClick as EventListener);
    document.addEventListener('click', trackInteraction as EventListener);
    window.addEventListener('scroll', trackScrollDepth as EventListener, { passive: true });
    document.addEventListener('mouseout', trackExitIntent as EventListener);
    window.addEventListener('beforeunload', trackBounce as EventListener);

    // Cleanup
    return () => {
      document.removeEventListener('click', trackCTAClick as EventListener);
      document.removeEventListener('click', trackInteraction as EventListener);
      window.removeEventListener('scroll', trackScrollDepth as EventListener);
      document.removeEventListener('mouseout', trackExitIntent as EventListener);
      window.removeEventListener('beforeunload', trackBounce as EventListener);
    };
  }, []);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
            });
          `,
        }}
      />
    </>
  );
}

// Helper function for form submissions (to be called from form components)
export function trackFormSubmission(formType: string, fieldsCompleted: number, validationErrors: number = 0) {
  const gtag = (window as any).gtag;
  if (gtag) {
    const formTime = (window as any).FORM_START_TIME 
      ? Math.round((Date.now() - (window as any).FORM_START_TIME) / 1000)
      : 0;

    gtag('event', 'form_submission', {
      form_type: formType,
      fields_completed: fieldsCompleted,
      form_time_sec: formTime,
      validation_errors: validationErrors,
      submission_method: 'button_click',
      conversion_value: 300, // $300 average consultation value
    });
  }
}
