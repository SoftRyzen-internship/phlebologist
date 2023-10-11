'use client';

import { FC } from 'react';

import { ConsultationProps } from './Consultation.props';
import { Heading, Form } from '@/components';
import { useWindowWidth } from '@/hooks';

const Consultation: FC<ConsultationProps> = ({
  staticData,
  className = '',
}) => {
  const { isScreenMobile } = useWindowWidth();
  const { title, callText, callTextMobile, form } = staticData;
  return (
    <section id="consultation" className={className}>
      <div className="container">
        <div className="wrapper rounded-t-medium bg-primary-dark-400 pb-[52px] pt-6 md:rounded-t-extraLarge xl:rounded-t-max">
          <Heading tag="h2" className="mb-5 text-white md:mb-8 xl:mb-0">
            {title}
          </Heading>
          <div>
            <p className="mx-auto mb-4 whitespace-pre-wrap text-center text-sm leading-[1.29] -tracking-[0.56px] text-white md:mb-6 xl:mb-4">
              {isScreenMobile ? callTextMobile : callText}
            </p>
            <Form
              staticData={form}
              className="mx-auto h-[562px] w-full rounded-extended bg-white p-4 md:w-[560px] md:px-6 md:py-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
