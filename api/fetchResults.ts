import client from '@/tina/__generated__/client';

const fetchResults = async (lang: string) => {
  try {
    const { data } = await client.queries.results({
      relativePath: 'results.md',
    });

    const result = data.results.case?.map((item: any) => {
      return {
        ...item,
        content: item.content[lang],
      };
    });

    return result;
  } catch (error) {
    return error;
  }
};

export default fetchResults;
