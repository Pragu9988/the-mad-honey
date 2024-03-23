declare const window: Window &
  typeof globalThis & {
    gtag: any;
  };

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageView = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
};

export const event = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
