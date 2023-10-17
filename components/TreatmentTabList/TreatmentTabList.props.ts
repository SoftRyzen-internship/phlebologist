import { Locale } from '@/i18n.config';
import { IMethodData } from '@/types';

export interface TreatmentTabListProps {
  lang: Locale;
  data: TreatmentTabListData;
}

type TreatmentTabListData = {
  button: string;
  more: string;
  methods: IMethodData[];
};
