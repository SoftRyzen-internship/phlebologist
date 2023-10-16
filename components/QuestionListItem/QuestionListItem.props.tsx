export interface QuestionsListItemProps {
  data: QuestionsType;
  index: number;
  aria: string;
}

type QuestionsType = {
  question: string;
  answer: string;
};
