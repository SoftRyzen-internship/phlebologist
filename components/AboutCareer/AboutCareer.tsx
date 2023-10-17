'use client';

import { useState, FC } from 'react';

import classNames from 'classnames';

import { ErrorMessage, Heading, AboutItem } from '@/components';

import { useWindowWidth } from '@/hooks';

import { AboutCareerProps } from './AboutCareer.props';

const COUNT_VISIBLE_ITEMS = 5;

const AboutCareer: FC<AboutCareerProps> = ({ data, staticData }) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const { isScreenMobile, isScreenDesktop } = useWindowWidth();

  if (!data) {
    return <ErrorMessage />;
  }

  const { title, institutions } = data;
  const { btnHide, btnShow } = staticData;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" className="mt-6">
        {title}
      </Heading>
      {(isScreenDesktop || isScreenMobile) && (
        <>
          <ul className="mt-5 grid list-none gap-4">
            {institutions &&
              isShowAll &&
              institutions.map((item, index) => (
                <AboutItem key={`${item.__typename}${index}`} item={item} />
              ))}

            {institutions &&
              !isShowAll &&
              institutions
                .slice(0, COUNT_VISIBLE_ITEMS)
                .map((item, index) => (
                  <AboutItem key={`${item.__typename}${index}`} item={item} />
                ))}
          </ul>
          {institutions.length > COUNT_VISIBLE_ITEMS && (
            <button
              className={classNames(
                'mt-6 text-left leading-normal -tracking-[0.64px] text-primary-dark-400 underline xl:ml-[70px]',
                isShowAll ? 'xl:mt-5' : 'xl:mt-12',
              )}
              onClick={() => setIsShowAll(prev => !prev)}
              type="button"
            >
              {!isShowAll ? btnShow : btnHide}
            </button>
          )}
        </>
      )}

      {!isScreenDesktop && !isScreenMobile && (
        <ul className="mt-8 grid list-none gap-4 md:grid-cols-2">
          {institutions &&
            institutions.map((item, index) => (
              <AboutItem key={`${item.__typename}${index}`} item={item} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default AboutCareer;
