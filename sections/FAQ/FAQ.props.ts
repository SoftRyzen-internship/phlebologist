import { SocialsDataType } from '@/types';

export interface FAQProps {
  staticData: {
    faq: FAQDataType;
    socials: SocialsDataType;
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
