import { Locale } from '@/i18n.config';
import { IIconBtnData, FeedbackData } from '@/types';

export interface FeedbackProps {
  staticData: {
    feedback: FeedbackData;
    iconBtnData: IIconBtnData;
  };
  lang: Locale;
}
