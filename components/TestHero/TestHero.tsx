import { PageSectionsHero } from '@/tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const TestHero = (props: PageSectionsHero) => {
  return (
    <>
      {/* variant 1 */}
      <h2 className="mt-4 text-center text-xl">
        <TinaMarkdown content={props.title} />
      </h2>

      {/* variant 2 - works in the video tutorial but does not apply styles in my case o_O */}
      <TinaMarkdown
        content={props.subtitle}
        components={{
          h3: props => (
            <h2 className="mt-4 text-center text-lg uppercase" {...props} />
          ),
        }}
      />
    </>
  );
};

export default TestHero;
