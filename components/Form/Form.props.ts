export interface FormProps {
  staticData: {
    input: {
      name: {
        label: string;
        placeholder: string;
        error: string;
      };
      phone: {
        label: string;
        placeholder: string;
        error: string;
      };
    };
    textarea: {
      label: string;
      placeholder: string;
    };
    checkbox: {
      label: string;
    };
    button: {
      sendText: string;
      sentText: string;
      loadingText: string;
      errorText: string;
    };
  };
  className?: string;
}
