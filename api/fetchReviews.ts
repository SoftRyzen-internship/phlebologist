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

    return null;
  }
};

export default fetchReviews;

// === in your component ===

// import { fetchReviews } from '@/api/fetchReviews';

// const reviews = await fetchReviews(lang);
// console.log(reviews);
