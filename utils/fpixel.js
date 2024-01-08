export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const pagelead = () => {
  window.fbq('track', 'Lead');
};

export const init = () => {
  window.fbq('init', FB_PIXEL_ID);
};

export const reset = () => {
  fbq('set', 'autoConfig', 'false', FB_PIXEL_ID);
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
