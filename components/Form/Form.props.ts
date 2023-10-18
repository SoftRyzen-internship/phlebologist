import { FormInputOptionsType } from '../FormInput/FormInput.props';
import { FormTextareaOptionsType } from '../FormTextarea/FormTextarea.props';
import { FormCheckboxOptionsType } from '../FormCheckbox/FormCheckbox.props';

export enum NameEnum {
  userName = 'userName',
  phoneNumber = 'phoneNumber',
  userMessage = 'userMessage',
  userAgree = 'userAgree',
}

export interface IFormBuildingData {
  options: {
    name: FormInputOptionsType;
    phone: FormInputOptionsType;
    message: FormTextareaOptionsType;
    agree: FormCheckboxOptionsType;
  };
}

export interface FormInputs {
  userName: NameEnum;
  phoneNumber: NameEnum;
  userMessage: NameEnum;
  userAgree: NameEnum;
}

type CommonInputStaticType = {
  label: string;
  placeholder: string;
  error: string;
};

type InputStaticData = {
  name: CommonInputStaticType;
  phone: CommonInputStaticType;
};

type CheckboxStaticData = { label: string };

type ButtonStaticData = {
  sendText: string;
  sentText: string;
  loadingText: string;
  errorText: string;
};

type ToastMessageType = { success: string; error: string };

export interface IForm {
  input: InputStaticData;
  textarea: CommonInputStaticType;
  checkbox: CheckboxStaticData;
  button: ButtonStaticData;
  toastMessage: ToastMessageType;
}

export interface FormProps {
  staticData: IForm;
  className?: string;
}
