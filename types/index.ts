export type IconBtnName =
  | 'tiktok'
  | 'facebook'
  | 'instagram'
  | 'arrow'
  | 'location';

// === fetched data types - About collection ===

export type AboutDataType = {
  image: string;
  general: AboutGeneralDataType;
  education: AboutEducationDataType;
  career: AboutCareerDataType;
  certificates: AboutCertificateType[];
};

export type AboutGeneralDataType = {
  __typename: string;
  name: string;
  profession: string;
  education: GeneralEducationType[];
  experience: GeneralExperienceType[];
};

type GeneralEducationType = {
  __typename: string;
  institution: string;
};

type GeneralExperienceType = {
  __typename: string;
  point: string;
};

export type AboutEducationDataType = {
  __typename: string;
  title: string;
  institutions: GeneralEducationType[];
};

export type AboutCareerDataType = {
  __typename: string;
  title: string;
  institutions: CareerInstitutionType[];
};

type CareerInstitutionType = {
  __typename: string;
  period: string;
  institution: string;
};

export type AboutCertificateType = {
  __typename: string;
  photo: string;
  description: {
    __typename: string;
    alt: string;
  };
};

export interface ISocials {
  name: IconBtnName;
  url: string;
}
