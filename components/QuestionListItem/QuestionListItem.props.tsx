export interface QuestionsListItemProps {
  item: QuestionsType;
  index: number;
  aria: string;
}

type QuestionsType = {
  question: string;
  answer: string;
};
