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

export const fetchEducation = async (lang: string) => {
  try {
    const result = await client.queries.about({ relativePath: 'about.md' });

    const data = result.data.about.education[lang];

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchCareer = async (lang: string) => {
  try {
    const result = await client.queries.about({ relativePath: 'about.md' });

    const data = result.data.about.career[lang];

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchCertificates = async (lang: string) => {
  try {
    const result = await client.queries.about({ relativePath: 'about.md' });

    const data = result.data.about.certificates.map((item: any) => {
      return {
        ...item,
        description: item.description[lang],
      };
    });

    return data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
