import { IIconBtnData } from '@/types';

export interface ModalProps {
  staticData: IIconBtnData;
  isOpen?: boolean;
  isReview: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
}
