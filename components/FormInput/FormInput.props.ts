export interface FormInputProps {
  staticData: {
    label: string;
    placeholder: string;
    error: string;
  };
  register: any;
  errors: any;
  options: {
    name: string;
    required: boolean;
    pattern: string;
    minLength: number;
    maxLength: number;
  };
}
