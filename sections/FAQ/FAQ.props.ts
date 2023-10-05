import { ISocials } from '@/types';

export interface FAQProps {
  staticData: {
    faq: FAQDataType;
    socials: ISocials;
  };
}

type FAQDataType = {
  title: string;
  description: string;
  button: string;
  aria: string;
  questions: QuestionsType[];
};

type QuestionsType = {
  question: string;
  answer: string;
};
