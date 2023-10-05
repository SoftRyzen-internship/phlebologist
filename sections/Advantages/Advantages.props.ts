export type AdvantageItem = {
  id: string;
  title: string;
  description: string;
};

export interface AdvantagesProps {
  staticData: {
    title: string;
    mainQuestion: string;
    advList: AdvantageItem[];
    enrollText: string;
    buttonText: string;
  };
  className?: string;
}
