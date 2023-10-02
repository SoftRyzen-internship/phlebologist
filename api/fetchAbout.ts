import client from '@/tina/__generated__/client';

export const fetchImage = async () => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.photo;

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchGeneral = async (lang: string) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.general[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchEducation = async (lang: string) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.education[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchCareer = async (lang: string) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.career[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const fetchCertificates = async (lang: string) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.certificates.map((item: any) => {
      return {
        ...item,
        description: item.description[lang],
      };
    });

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};
