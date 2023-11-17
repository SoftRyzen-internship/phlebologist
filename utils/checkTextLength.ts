function checkTextLength(
  str: string | undefined,
  limit: number = 280,
): { doesFit: boolean; text: string } {
  if (str === undefined) {
    return { doesFit: false, text: '' };
  }

  if (str.length <= limit) {
    return { doesFit: true, text: str };
  }

  return { doesFit: false, text: str.slice(0, limit - 110) + '...' };
}

export default checkTextLength;
