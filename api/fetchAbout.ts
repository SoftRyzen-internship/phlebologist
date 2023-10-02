import client from '@/tina/__generated__/client';

export const fetchImage = async () => {
  try {
    const result = await client.queries.about({ relativePath: 'about.md' });

    const data = result.data.about.photo;

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchGeneral = async (lang: string) => {
  try {
    const result = await client.queries.about({ relativePath: 'about.md' });

    const data = result.data.about.general[lang];

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// create functions below for the other sections
// of the collection About as per the example above
