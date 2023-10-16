import client from '@/tina/__generated__/client';

const fetchReviews = async (lang: string) => {
  try {
    const { data } = await client.queries.reviews({
      relativePath: 'reviews.md',
    });

    const result = data.reviews[lang];

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchReviews;

// === in your component ===

// import { fetchReviews } from '@/api';

// const reviews = await fetchReviews(lang);
// console.log(reviews);
