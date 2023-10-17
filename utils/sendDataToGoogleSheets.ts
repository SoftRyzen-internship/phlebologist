import axios from 'axios';
import { IDataToSend } from '@/types';

export const sendDataToGoogleSheets = async (data: IDataToSend) => {
  try {
    await axios.post('/api/googleSheet', data);
  } catch (error) {
    throw new Error();
  }
};
