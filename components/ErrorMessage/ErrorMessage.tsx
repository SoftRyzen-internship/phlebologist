import Image from 'next/image';

const ErrorMessage = () => {
  return (
    <>
      <h2 className="font-semibold">Atata!</h2>
      <p className="text-sm">
        Someone did not fill out the data in the admin system...
      </p>
      <Image src="/images/oops.jpg" alt="error" width={200} height={200} />
    </>
  );
};

export default ErrorMessage;
