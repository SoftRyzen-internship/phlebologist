import client from '@/tina/__generated__/client';

const fetchReviews = async (lang: string) => {
  try {
    const { data } = await client.queries.reviews({
      relativePath: 'reviews.md',
    });

    const result = data.reviews[lang];

    return result;
  } catch (error) {
    return error;
  }
};

export default fetchReviews;
