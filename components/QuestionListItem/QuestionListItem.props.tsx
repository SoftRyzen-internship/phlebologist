export interface QuestionsListItemProps {
  item: QuestionsType;
  index: number;
}

type QuestionsType = {
  question: string;
  answer: string;
};
