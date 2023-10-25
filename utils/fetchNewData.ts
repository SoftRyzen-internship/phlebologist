import axios from 'axios';

import { Locale } from '@/i18n.config';
import { ApiRouteT } from '@/types';

const fetchNewData = async (lang: Locale, route: ApiRouteT) => {
  try {
    const res = await axios.post(
      `${checkEnvironment()}/api/${route}`,
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

function checkEnvironment() {
  const base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_SITE_URL;

  return base_url;
}

export default fetchNewData;
