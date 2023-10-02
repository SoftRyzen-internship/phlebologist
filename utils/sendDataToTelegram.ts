import axios from 'axios';

export const sendContactDataToTelegram = async (data: any) => {
  //???type
  let message = 'Заявка з сайту:\n';

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
