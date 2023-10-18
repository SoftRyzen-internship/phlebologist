import { FeedbackSlideData, FeedbackData, IIconBtnData } from '@/types';

export interface FeedbackSlideProps {
  data: FeedbackSlideData;
  className?: string;
  staticData: IIconBtnData;
  optionalStaticData: FeedbackData;
  currentSlideIdx?: number;
  totalQty?: number;
}
