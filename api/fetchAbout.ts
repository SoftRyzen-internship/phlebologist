import client from '@/tina/__generated__/client';

export const fetchGeneral = async (lang: string) => {
  const result = await client.queries.about({ relativePath: 'about.md' });

  // return data for the currently selected locale
  return result.data.about.general[lang];
};

// create functions below for the other sections
// of the collection About as per the example above
