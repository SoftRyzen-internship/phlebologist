'use client';

import { useState, FC } from 'react';

import { Heading, AboutItem } from '@/components';

import { useWindowWidth } from '@/hooks';

import { AboutEducationProps } from './AboutEducation.props';

const COUNT_VISIBLE_ITEMS = 3;

const AboutEducation: FC<AboutEducationProps> = ({ data, staticData }) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const { isScreenMobile } = useWindowWidth();

  const { title, institutions } = data;
  const { btnHide, btnShow } = staticData;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" className="mt-6">
        {title}
      </Heading>
      {isScreenMobile && (
        <>
          <ul className="mt-5 grid list-none gap-4">
            {institutions &&
              !isShowAll &&
              institutions
                .slice(0, COUNT_VISIBLE_ITEMS)
                .map((item, index) => (
                  <AboutItem key={`${item.__typename}${index}`} item={item} />
                ))}

            {institutions &&
              isShowAll &&
              institutions.map((item, index) => (
                <AboutItem key={`${item.__typename}${index}`} item={item} />
              ))}
          </ul>
          {institutions.length > COUNT_VISIBLE_ITEMS && (
            <button
              onClick={() => setIsShowAll(prev => !prev)}
              type="button"
              className="mt-6 text-left leading-normal -tracking-[0.64px] text-primary-dark-400 underline"
            >
              {!isShowAll ? btnShow : btnHide}
            </button>
          )}
        </>
      )}
      {!isScreenMobile && (
        <ul className="mt-8 grid list-none gap-4 mdOnly:grid-cols-2">
          {institutions &&
            institutions.map((item, index) => (
              <AboutItem key={`${item.__typename}${index}`} item={item} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default AboutEducation;
