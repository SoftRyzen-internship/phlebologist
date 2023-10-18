import axios from 'axios';

import { IDataToSend } from '@/types';

export const sendDataToTelegram = async (data: IDataToSend) => {
  let message = '<b>Заявка з сайту:</b>\n';

  for (const [key, value] of Object.entries(data)) {
    message += `${key}: ${value}\n`;
  }

  try {
    axios.post(`/api/telegram`, {
      text: message,
    });
  } catch (error) {
    throw new Error();
  }
};
