import axios from 'axios';

export const sendDataToGoogleSheets = async (data: any) => {
  //???type
  const reqData = { ...data, phone: data.phone.replace('+', ' +') };
  try {
    await axios.post('/api/googleSheet', reqData);
  } catch (error) {
    throw new Error();
  }
};
