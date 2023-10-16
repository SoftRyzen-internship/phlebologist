function checkTextLength(
  str: string,
  limit: number = 340,
): { doesFit: boolean; text: string } {
  if (str.length <= limit) {
    return { doesFit: true, text: str };
  }

  return { doesFit: false, text: str.slice(0, limit - 100) + '...' };
}

export default checkTextLength;
