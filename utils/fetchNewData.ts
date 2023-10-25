import axios from 'axios';

import { Locale } from '@/i18n.config';
import { ApiRouteT } from '@/types';

export const revalidate = 3600;

export const fetchNewData = async (lang: Locale, route: ApiRouteT) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/${route}`,
      { lang },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchNewData;
