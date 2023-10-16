export interface ModalProps {
  staticData: any;
  isOpen?: boolean;
  isReview: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
}
