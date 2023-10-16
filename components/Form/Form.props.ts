export interface FormInputs {
  userName: string;
  phoneNumber: string;
  userMessage: string;
  userAgree: boolean;
}

export interface IForm {
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
  toastMessage: { success: string; error: string };
}

export interface FormProps {
  staticData: IForm;
  className?: string;
}
