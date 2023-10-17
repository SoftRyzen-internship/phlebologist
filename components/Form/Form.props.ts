export interface FormInputs {
  userName: string;
  phoneNumber: string;
  userMessage: string;
  userAgree: boolean;
}

type InputStaticData = {
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

type TextareaStaticData = {
  label: string;
  placeholder: string;
};

type CheckboxStaticData = { label: string };

type ButtonStaticData = {
  sendText: string;
  sentText: string;
  loadingText: string;
  errorText: string;
};

export interface IForm {
  input: InputStaticData;
  textarea: TextareaStaticData;
  checkbox: CheckboxStaticData;
  button: ButtonStaticData;
  toastMessage: { success: string; error: string };
}

export interface FormProps {
  staticData: IForm;
  className?: string;
}
