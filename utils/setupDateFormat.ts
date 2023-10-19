function setupDateFormat(tinaDate: string): string {
  try {
    const date = new Date(tinaDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  } catch (_) {
    return '';
  }
}

export default setupDateFormat;
