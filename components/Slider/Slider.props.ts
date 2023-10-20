export interface SliderProps {
  slides: any[];
  staticData: any;
  optionalStaticData?: any;
  section: 'result' | 'feedback' | 'doctor';
  slide: any;
  isTemplate?: boolean;
  slideClassName?: string;
}
