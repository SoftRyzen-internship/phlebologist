export type IconBtnName =
  | 'tiktok'
  | 'facebook'
  | 'instagram'
  | 'arrow'
  | 'location'
  | 'close';

// === fetched data types - About collection ===

export type AboutDataType = {
  image: string;
  video?: string;
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

// === static data types ===

export interface IIconBtnData {
  tiktok: {
    iconFunction: string;
    iconLabel: string;
  };
  facebook: {
    iconFunction: string;
    iconLabel: string;
  };
  instagram: {
    iconFunction: string;
    iconLabel: string;
  };
  arrowRight: {
    iconFunction: string;
    iconLabel: string;
  };
  arrowLeft: {
    iconFunction: string;
    iconLabel: string;
  };
  location: {
    iconFunction: string;
    iconLabel: string;
  };
}

export interface ISocials {
  tiktok: string;
  telegram: string;
  facebook: string;
  instagram: string;
}

export interface IFooterData {
  address: string;
  phone: string;
}

export interface INavigationItemData {
  title: string;
  linkTo: string;
}

export interface IHeaderButtonsData {
  linkButton: string;
  formButton: string;
  langButton: {
    headerBtn: string;
    menuBtn: string;
  };
  menuButton: string;
}

export interface ILocaleSwitcherData {
  headerBtn: string;
  menuBtn: string;
}

export type TextData = {
  doesFit: boolean;
  text: string;
};

export type TinaType = {
  children: {
    0: { text: string };
  };
};

export type TinaChildren = TinaType[];

// === Treatment page ===

export interface ITreatmentDetails {
  title: string;
  description: string;
  image: string;
  questions: ITreatmentQuestion[];
}

export interface ITreatmentQuestion {
  question: string;
  answer: {
    text?: string;
    subtext?: string;
    list: string[];
    aftertext?: string;
  };
}

// === Toast notification messages ===

export interface IToastMessage {
  success: string;
  error: string;
}
