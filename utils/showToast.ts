import toast from 'react-hot-toast';

interface toastMessage {
  success: string;
  error: string;
}

export const showToast = (isSuccess: boolean, toastMessage: toastMessage) => {
  const { success, error } = toastMessage;

  if (isSuccess) {
    toast.success(success, { duration: 5000 });
  } else {
    toast.error(error, { duration: 3000 });
  }
};
