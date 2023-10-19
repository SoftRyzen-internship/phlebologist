import { TinaChildren, TinaType } from '@/types';

function getTextFromTina(arr: TinaChildren): string {
  try {
    const newArr: string[] = [];

    arr.forEach((child: TinaType) => {
      const tinaNewChildren = { ...child?.children };
      const tinaReview = { ...tinaNewChildren[0] };
      const tinaText = tinaReview?.text;
      newArr.push(tinaText);
    });

    return newArr.join(' ');
  } catch (error) {
    throw new Error(error);
  }
}

export default getTextFromTina;
