import { useState, useEffect } from 'react';
import setupDateFormat from '@/utils/setupDateFormat';

export const useDateFormat = (date: string) => {
  const [formattedDate, setFormattedDate] = useState<null | string>(null);

  useEffect(() => setFormattedDate(setupDateFormat(date)), [date]);

  return formattedDate;
};
