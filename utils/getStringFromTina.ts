import { TinaChildren, TinaType } from '@/types';

function getTextFromTina(arr: TinaChildren): string {
  const newArr: string[] = [];

  arr.forEach((child: TinaType) => {
    const tinaNewChildren = { ...child?.children };
    const tinaReview = { ...tinaNewChildren[0] };
    const tinaText = tinaReview?.text;
    newArr.push(tinaText);
  });

  return newArr.join(' ');
}

export default getTextFromTina;
