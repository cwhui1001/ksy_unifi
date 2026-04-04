export const GA_TRACKING_ID = "AW-18063176278";

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const reportLeadConversion = (url?: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/s1Q1CNXq35UcENbkmKVD`,
      value: 1.0,
      currency: "MYR",
      event_callback: () => {
        if (url) {
          window.location.href = url;
        }
      },
    });
  } else {
    console.warn("gtag not found on window. Skipping conversion report.");
    if (url) {
      window.location.href = url;
    }
  }
};
