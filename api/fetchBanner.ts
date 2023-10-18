import client from '@/tina/__generated__/client';

const fetchBanner = async (lang: string) => {
  try {
    const { data } = await client.queries.banner({ relativePath: 'banner.md' });
    const result = data.banner[lang];

    return result;
  } catch (error) {
    return error;
  }
};

export default fetchBanner;
