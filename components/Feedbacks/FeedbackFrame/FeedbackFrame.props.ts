import { FeedbackSlideData, FeedbackData } from '@/types';

export interface FeedbackFrameProps {
  data: FeedbackSlideData;
  staticData: FeedbackData;
  onClick?: () => void;
}
