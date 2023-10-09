import classNames from 'classnames';

import { InfoBlockProps } from './InfoBlock.props';

const InfoBlock: React.FC<InfoBlockProps> = ({
  config: {
    section,
    title,
    titleClassName,
    content,
    link,
    contentType = 'text',
    contentClassName,
  },
  children,
}) => {
  const titleStyles = classNames({
    'mb-[8px] font-medium text-black-dark -tracking-[0.04em]': true,
    'text-[18px] leading-normal': section.toLowerCase() === 'treatment',
    'text-[16px] leading-large xl:text-[20px] xl:leading-normal':
      section.toLowerCase() === 'contacts',
    [titleClassName ? titleClassName : '']: titleClassName,
  });

  const contentStyles = classNames({
    'text-[16px] text-black-dark -tracking-[0.04em]': true,
    'leading-normal': section.toLowerCase() === 'treatment',
    'leading-large xl:text-[20px] xl:leading-normal':
      section.toLowerCase() === 'contacts',
    'font-bold text-primary-dark-300 xl:font-normal xl:text-black-dark xl:hover:font-bold xl:focus:font-bold xl:hover:text-primary-dark-300 xl:focus:text-primary-dark-300 transition-colors duration-300':
      link,
    [contentClassName ? contentClassName : '']: contentClassName,
  });

  return (
    <>
      <p className={titleStyles}>{title}</p>

      {contentType.toLowerCase() === 'text' && (
        <p className={contentStyles}>{content}</p>
      )}

      {contentType.toLowerCase() === 'link' && (
        <a
          href={`tel:+${link}`}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className={contentStyles}
        >
          {content}
        </a>
      )}

      {contentType.toLowerCase() === 'list' && (
        <ul className="flex flex-col gap-[8px]">
          {content &&
            Array.isArray(content) &&
            content.map((text: string, idx: number) => (
              <li key={`${text}${idx}`} className={contentStyles}>
                {text}
              </li>
            ))}
        </ul>
      )}

      {contentType.toLowerCase() === 'component' && children}
    </>
  );
};

export default InfoBlock;
