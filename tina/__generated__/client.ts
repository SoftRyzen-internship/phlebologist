import { createClient } from 'tinacms/dist/client';
import { queries } from './types';
export const client = createClient({
  url: 'https://content.tinajs.io/1.4/content/73b18999-041b-4d81-ae56-b35cf55ce2a9/github/main',
  token: 'a2516c0821132a76dafd2d3ee3c183f79c7459fe',
  queries,
});
export default client;
