export type AdvantageItem = {
  id: string;
  title: string;
  description: string;
};

export interface AdvantagesProps {
  staticData: {
    title: string;
    mainQuestion: string;
    mainAnswer: string;
    advListMobile: AdvantageItem[];
    advListTabletDesktop: AdvantageItem[];
  };
  className?: string;
}
