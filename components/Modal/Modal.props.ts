export interface ModalProps {
  isOpen: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
}
