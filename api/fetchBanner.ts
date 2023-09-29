import client from '@/tina/__generated__/client';

export const fetchBanner = async (lang: string) => {
  const result = await client.queries.banner({ relativePath: 'banner.md' });

  // return data for the currently selected locale
  return result.data.banner[lang];
};
