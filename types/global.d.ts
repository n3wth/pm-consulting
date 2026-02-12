export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    AB_VARIANT?: 'A' | 'B';
    PAGE_LOAD_TIME?: number;
    FORM_START_TIME?: number;
    FORM_ERROR_COUNT?: number;
    INTERACTION_COUNT?: number;
  }
}
