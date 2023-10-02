import client from '@/tina/__generated__/client';

const fetchBanner = async (lang: string) => {
  try {
    const { data } = await client.queries.banner({ relativePath: 'banner.md' });

    const result = data.banner[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default fetchBanner;

// === in your component ===

// import { fetchBanner } from '@/api/fetchBanner';

// const banner = await fetchBanner(lang);
// console.log(banner);
