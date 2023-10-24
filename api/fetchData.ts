import { Locale } from '@/i18n.config';

export const fetchData = async (lang: Locale, route: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/${route}`,
      {
        method: 'POST',
        body: JSON.stringify({ lang }),
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 },
      },
    );

    const result = await res.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchData;
