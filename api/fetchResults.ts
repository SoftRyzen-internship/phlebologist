import client from '@/tina/__generated__/client';

export const fetchResults = async (lang: string) => {
  try {
    const result = await client.queries.results({ relativePath: 'results.md' });

    const data = result.data.results.case?.map((item: any) => {
      return {
        ...item,
        content: item.content[lang],
      };
    });

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// === in your component ===

// import { fetchResults } from '@/api/fetchResults';

// const results = await fetchResults(lang);
// console.log(results); - check the data
