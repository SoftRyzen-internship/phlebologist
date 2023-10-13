export interface FormTextareaProps {
  staticData: {
    label: string;
    placeholder: string;
  };
  register: any;
  errors: any;
  options: {
    name: string;
    required: boolean;
    maxLength: number;
  };
}
