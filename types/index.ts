import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

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

export type GeneralEducationType = {
  __typename: string;
  institution: string;
  period: string;
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

export type CareerInstitutionType = {
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
  close: {
    iconFunction: string;
    iconLabel: string;
  };
  play: {
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

type NavigationItemType = { title: string; linkTo: string };

export interface INavigationItemData {
  navigation_home: NavigationItemType[];
  navigation_treatment: NavigationItemType[];
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

export interface IFAQData {
  title: string;
  description: string;
  button: string;
  aria: string;
  questions: FAQQuestionsType[];
}

type FAQQuestionsType = {
  question: string;
  answer: string;
};

export interface ITreatmentsData {
  title: string;
  button: string;
  more: string;
  notes: string[];
  methods: IMethodData[];
}

export interface IMethodData {
  id: string;
  slideNum: string;
  name: string;
  description: string;
  image: string;
  info: IMethodInfoData[];
}

export interface IMethodInfoData {
  question: string;
  answer: string;
}

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

//=== Data to send ===

export interface IDataToSend {
  userName: string;
  userPhone: string;
  userMessage: string;
}

//=== Feedback Slides ===

export type FeedbackSlideData = {
  __typename: string;
  date: string;
  photo: string;
  video?: null | string | undefined;
  name: string;
  telegram?: null | string | undefined;
  review: {
    type: string;
    children: TinaMarkdownContent[];
    template?: string;
    isError: boolean | undefined;
  };
};

export type FeedbackData = {
  heading: string;
  anchor: string;
  photo: { alt: string };
  links: {
    send: { text: string; icon: string };
    read: { text: string };
    video: { icon: string };
  };
  templates: FeedbackSlideData[];
};

// === Contacts ===

export type ContactData = {
  heading: string;
  anchor: string;
  contactData: {
    phone: { caption: string; content: string };
    address: {
      caption: string;
      content: string;
    };
    schedule: {
      caption: string;
      content: string;
    };
    media: { caption: string };
    location: {
      placename: { firstRow: string; secondRow: string };
      url: string;
      images: {
        map: {
          img: string;
          alt: string;
        };
        office: {
          img: string;
          alt: string;
        };
      };
    };
  };
  action: {
    instruction: string;
    actionName: string;
  };
};
