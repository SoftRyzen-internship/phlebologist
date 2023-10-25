import { Locale } from '@/i18n.config';
import client from '@/tina/__generated__/client';
import { NextResponse } from 'next/server';

export const revalidate = 3600;

export const POST = async (request: Request) => {
  try {
    const body: any = await request.json();

    const { lang } = body;

    const image = await fetchImage();
    const video = await fetchVideo();
    const general = await fetchGeneral(lang);
    const education = await fetchEducation(lang);
    const career = await fetchCareer(lang);
    const certificates = await fetchCertificates(lang);

    const about = {
      image,
      video,
      general,
      education,
      career,
      certificates,
    };

    return NextResponse.json(about, { status: 200 });
  } catch (error) {
    throw new Error(error);
  }
};

const fetchImage = async () => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.photo;

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchVideo = async () => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.video;

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchGeneral = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.general[lang];

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchEducation = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.education[lang];

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchCareer = async (lang: Locale) => {
  try {
    const { data } = await client.queries.about({ relativePath: 'about.md' });

    const result = data.about.career[lang];

    return result;
  } catch (error) {
    throw new Error(error);
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
    throw new Error(error);
  }
};
