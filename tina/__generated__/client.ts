import { createClient } from 'tinacms/dist/client';
import { queries } from './types';
export const client = createClient({
  url: 'http://localhost:4001/graphql',
  token: 'b5b88f5896700db4c768033d7ee778c7056ef617',
  queries,
});
export default client;
