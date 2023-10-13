function setupVideoUrl(url: string): string {
  if (url && typeof url === 'string') {
    return url.replace('shorts', 'embed');
  }

  return '';
}

export default setupVideoUrl;
