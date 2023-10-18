type StaticDataType = {
  label: string;
  placeholder: string;
  error: string;
};

export interface FormTextareaProps {
  staticData: StaticDataType;
  register: any;
  errors: any;
  options: {
    name: string;
    required: boolean;
    maxLength: number;
  };
}
