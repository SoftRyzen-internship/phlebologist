import { IResultsTemplate } from '@/sections/Results/Results.props';

type OptionalStaticDataType = {
  afterAltText: string;
  afterHandleText: string;
  beforeAltText: string;
  beforeHandleText: string;
  buttonText: string;
  buttonTextMobile: string;
  secondaryTitle: string;
};

export interface ResultsSlideProps {
  data: IResultsTemplate;
  optionalStaticData: OptionalStaticDataType;
  currentSlideIdx: number;
  totalQty: number;
  isTemplate: boolean;
  className?: string;
}
