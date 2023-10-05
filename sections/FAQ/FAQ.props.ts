import { ISocial } from '@/types';

export interface FAQProps {
  staticData: {
    faq: FAQDataType;
    socials: ISocial;
  };
}

type FAQDataType = {
  title: string;
  description: string;
  button: string;
  questions: QuestionsType[];
};

type QuestionsType = {
  question: string;
  answer: string;
};
