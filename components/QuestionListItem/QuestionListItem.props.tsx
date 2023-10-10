export interface QuestionsListItemProps {
  data: QuestionsType;
  index: number;
  aria: string;
  isOpen: boolean;
  // toggleHandler: (index: number) => void;
  selectedIndex: number | undefined;
}

type QuestionsType = {
  question: string;
  answer: string;
};
