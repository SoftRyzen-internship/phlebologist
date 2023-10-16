import toast from 'react-hot-toast';

import { IToastMessage } from '@/types';

export const showToast = (isSuccess: boolean, toastMessage: IToastMessage) => {
  const { success, error } = toastMessage;

  if (isSuccess) {
    toast.success(success, { duration: 5000 });
  } else {
    toast.error(error, { duration: 3000 });
  }
};
