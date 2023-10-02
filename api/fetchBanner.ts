import client from '@/tina/__generated__/client';

export const fetchBanner = async (lang: string) => {
  try {
    const result = await client.queries.banner({ relativePath: 'banner.md' });

    const data = result.data.banner[lang];

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// === in your component ===

// import { fetchBanner } from '@/api/fetchBanner';

// const banner = await fetchBanner(lang);
// console.log(banner); - check the data
