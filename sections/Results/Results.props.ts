import { Locale } from '@/i18n.config';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { IIconBtnData } from '@/types';

type SliderDataType = {
  beforeAltText: string;
  afterAltText: string;
  beforeHandleText: string;
  afterHandleText: string;
};

export interface IResultsTemplate {
  content: { description: string | TinaMarkdownContent };
  before: string;
  after: string;
}

type StaticDataType = {
  title: string;
  secondaryTitle: string;
  buttonTextMobile: string;
  buttonText: string;
  slider: SliderDataType;
  template: IResultsTemplate[];
};

export interface ResultsProps {
  staticData: StaticDataType;
  iconData: IIconBtnData;
  lang: Locale;
}
