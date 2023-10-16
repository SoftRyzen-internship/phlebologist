import { Locale } from '@/i18n.config';
import { IMethodData } from '@/types';

export interface TreatmentTabPanelProps {
  lang: Locale;
  data: TreatmentTabPanelData;
}

type TreatmentTabPanelData = {
  method: IMethodData;
  button: string;
};
