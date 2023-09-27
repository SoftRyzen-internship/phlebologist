import { PageQuery } from '@/tina/__generated__/types';

import { TestHero } from '@/components';

const TestSection = (props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  return (
    <section>
      {props.data.page.sections?.map(section => {
        if (section?.__typename === 'PageSectionsHero') {
          return <TestHero key={section.__typename} {...section} />;
        }
      })}
    </section>
  );
};

export default TestSection;
