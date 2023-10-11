export interface ModalProps {
  staticData: any;
  isOpen: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
}
