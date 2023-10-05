export interface InfoBlockProps {
  config: {
    section: 'contacts' | 'treatment';
    title: string;
    titleClassName?: string | undefined;
    contentType?: 'text' | 'link' | 'list' | 'component' | undefined;
    content?: string | string[] | undefined;
    link?: string | undefined;
    contentClassName?: string | undefined;
  };
  children?: React.ReactNode | undefined;
}
