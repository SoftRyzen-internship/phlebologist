export interface QuestionsListProps {
  data: {
    questions: QuestionsType[];
    aria: string;
  };
}

export type QuestionsType = {
  question: string;
  answer: string;
};
