export interface QuestionsListProps {
  data: QuestionsType[];
}

type QuestionsType = {
  question: string;
  answer: string;
};
