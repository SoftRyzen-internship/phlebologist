type StaticDataType = {
  label: string;
  placeholder: string;
  error: string;
};

type OptionsType = {
  name: string;
  required: boolean;
  pattern: string;
  minLength: number;
  maxLength: number;
};

export interface FormInputProps {
  staticData: StaticDataType;
  register: any;
  errors: any;
  options: OptionsType;
}
