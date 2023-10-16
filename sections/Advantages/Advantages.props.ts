export type AdvantageItem = {
  id: string;
  title: string;
  description: string;
};

type StaticDataType = {
  title: string;
  mainQuestion: string;
  advList: AdvantageItem[];
  enrollText: string;
  buttonText: string;
};

export interface AdvantagesProps {
  staticData: StaticDataType;
  className?: string;
}
