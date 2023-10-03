import tiktokIcon from '@/public/icons/tiktok.svg';
import facebookIcon from '@/public/icons/facebook.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import arrowIcon from '@/public/icons/arrow-right.svg';
import locationIcon from '@/public/icons/location.svg';

import { IconBtnName } from '@/types';

function getIconByName(icon: IconBtnName): any | null {
  let iconRef = null;

  switch (icon.toLowerCase()) {
    case 'tiktok':
      iconRef = tiktokIcon;

      break;
    case 'facebook':
      iconRef = facebookIcon;
      break;

    case 'instagram':
      iconRef = instagramIcon;
      break;

    case 'arrow':
      iconRef = arrowIcon;
      break;

    case 'location':
      iconRef = locationIcon;
      break;

    default:
      break;
  }

  return { iconRef };
}

export default getIconByName;
