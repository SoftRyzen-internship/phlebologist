import Link from 'next/link';

const MethodButton = ({ children, lang, id }) => {
  return <Link href={`${lang}/treatment/${id}`}>{children}</Link>;
};

export default MethodButton;
