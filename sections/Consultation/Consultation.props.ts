export interface ConsultationProps {
  staticData: {
    title: string;
    callTextMobile: string;
    callText: string;
    form: {
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
    };
  };
  className?: string;
}
