import { PageQuery } from '@/tina/__generated__/types';

const Test = (props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  return <h1 className="text-3xl font-semibold">{props.data.page.title}</h1>;
};

export default Test;
