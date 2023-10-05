export interface QuestionsListProps {
  data: {
    questions: QuestionsType[];
    aria: string;
  };
}

type QuestionsType = {
  question: string;
  answer: string;
};
