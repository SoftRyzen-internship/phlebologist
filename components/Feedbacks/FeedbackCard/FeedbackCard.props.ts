import { FeedbackSlideData, FeedbackData } from '@/types';

export interface FeedbackCardProps {
  data: FeedbackSlideData;
  staticData: FeedbackData;
  isModal?: boolean;
  onClick?: () => void;
}
