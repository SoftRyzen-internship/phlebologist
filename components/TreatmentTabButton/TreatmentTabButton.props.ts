import { IMethodData } from '@/types';

export interface TreatmentTabButtonProps {
  variant: 'light' | 'dark';
  selected: boolean;
  data: TreatmentTabButtonData;
}

type TreatmentTabButtonData = {
  method: IMethodData;
  more: string;
};
