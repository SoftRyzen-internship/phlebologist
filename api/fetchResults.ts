import client from '@/tina/__generated__/client';

export const fetchResults = async (lang: string) => {
  const result = await client.queries.results({ relativePath: 'results.md' });

  const data = result.data.results.case?.map((item: any) => {
    return {
      date: item.date,
      content: item.content[lang],
      before: item.before,
      after: item.after,
    };
  });

  // return data for the currently selected locale
  return data;
};

// === in your component ===

// import { fetchResults } from '@/api/fetchResults';

// const results = await fetchResults(lang);
// console.log(results); - check the data
