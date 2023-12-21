'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import * as pixel from '@/utils/fpixel';

const FacebookPixel = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixel.FB_PIXEL_ID ?? "");
        ReactPixel.pageView();
        // ReactPixel.track(event, data); // Here we can track events (same as event func in @/utils/fpixel)
      });
  }, [pathname, searchParams]);


  // return (
  //   <>
  //     <Script id="fb-pixel" data-pixel-id={pixel.FB_PIXEL_ID}>
  //       {`
  //               !function(f,b,e,v,n,t,s)
  //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');

  //             `}
  //     </Script>
  //     <noscript>
  //       <img
  //         height="1"
  //         width="1"
  //         style={{ display: 'none' }}
  //         src="https://www.facebook.com/tr?id=1064048701288094&ev=PageView&noscript=1"
  //       />
  //     </noscript>
  //   </>
  // );

  return null;
};

export default FacebookPixel;
