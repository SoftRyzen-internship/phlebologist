'use client';

import classNames from 'classnames';
import checkTextLength from '@/utils/checkTextLength';
import Send from '@/public/icons/send-telegram.svg';
import Image from 'next/image';

import { FeedbackCardProps } from './FeedbackCard.props';

import { FeedbackCap } from '@/components';

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  data,
  isModal = false,
  onClick,
}) => {
  const text =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ab sunt minus at similique commodi eos saepe voluptate fugiat ratione dolorum nobis eius fuga dignissimos dicta accusantium? Ipsa excepturi repellendus, suscipit inventore temporibus aliquid quidem at quia est facere eos omnis ullam culpa beatae, natus odio autem aspernatur explicabo iure, corrupti architecto aut velit facilis. Enim fugit numquam ab earum nisi reprehenderit odio eum, nobis porro a eaque odit quae cupiditate minima? Est cumque esse natus consequatur facilis aperiam corporis non voluptatem error, expedita debitis numquam quia dolor asperiores excepturi accusantium fuga. Dolore voluptatum magni laudantium perferendis quo quis incidunt natus cumque eaque odio, maxime earum ipsa quod hic in fuga quisquam qui sequi veritatis aut reprehenderit? Dolor quas quis, quibusdam ab aperiam sint excepturi, quos modi magnam officiis deleniti aspernatur nisi incidunt libero harum error voluptas nesciunt voluptate velit atque eligendi, dicta laborum! Laboriosam mollitia magni officiis, eius error assumenda iusto sunt voluptatem provident doloribus. Dolor totam, voluptatibus harum, exercitationem soluta doloribus sit libero excepturi illo ullam est veniam! Rerum quibusdam ducimus aliquid cum nobis commodi nam ullam eveniet illo dolor maiores nesciunt libero est eum repellat non officiis reiciendis, nihil deleniti labore, deserunt facilis quidem minima? Cum, omnis!';

  const textData = checkTextLength(text);

  return (
    <article
      className={classNames({
        'h-full w-full ': true,
        'p-[16px] md:p-[36px] xl:p-[40px]': !isModal,
      })}
    >
      <FeedbackCap data={data} />

      <p
        className={classNames({
          'mt-[20px] overflow-y-auto text-[14px] md:mt-[28px] md:text-[16px] xl:mt-[30px]':
            true,
          'h-[289px] md:h-[323px]': isModal,
        })}
      >
        {isModal ? text : textData.text}
      </p>

      {isModal ? null : textData.doesFit ? null : (
        <button
          type="button"
          onClick={onClick}
          className="absolute bottom-[16px] left-[16px] border-b-[1px] border-b-secondary-dark text-[14px] text-secondary-dark transition-all duration-300  md:bottom-[36px] md:left-[36px] md:text-[16px] xl:bottom-[40px] xl:left-[40px] xl:border-b-black-dark xl:text-black-dark xl:hover:border-b-secondary-dark xl:hover:font-semibold xl:hover:text-secondary-dark xl:focus:border-b-secondary-dark xl:focus:font-semibold"
        >
          Дочитати
        </button>
      )}
    </article>
  );
};

export default FeedbackCard;
