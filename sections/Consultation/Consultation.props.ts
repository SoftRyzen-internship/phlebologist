import { IForm } from '@/components/Form/Form.props';

type StaticDataType = {
  title: string;
  callTextMobile: string;
  callText: string;
  form: IForm;
};

export interface ConsultationProps {
  staticData: StaticDataType;
  className?: string;
}
