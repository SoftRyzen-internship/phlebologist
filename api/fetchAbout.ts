import { Locale } from '@/i18n.config';
import client from '@/tina/__generated__/client';

export const fetchAbout = async (lang: Locale) => {
  try {
    const image = await fetchImage();
    const general = await fetchGeneral(lang);
    const education = await fetchEducation(lang);
    const career = await fetchCareer(lang);
    const certificates = await fetchCertificates(lang);

    const about = {
      image,
      general,
      education,
      career,
      certificates,
    };

    return about;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const fetchImage = async () => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.photo;

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const fetchGeneral = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.general[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const fetchEducation = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.education[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const fetchCareer = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.career[lang];

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const fetchCertificates = async (lang: Locale) => {
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

export default fetchAbout;
