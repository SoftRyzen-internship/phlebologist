import { useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as pixel from '@/utils/fpixel';
import { TReactPixel } from '@/types';

export const useFacebookPixel = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [reactPixel, setReactPixel] = useState<TReactPixel | null>(null);

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        setReactPixel(ReactPixel);
        ReactPixel.init(pixel.FB_PIXEL_ID ?? '');
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  const trackEvent = useCallback((eventName: string) => {
    if (reactPixel) {
      reactPixel.track(eventName);
    }
  }, [reactPixel]);

  return { reactPixel, trackEvent };
};
