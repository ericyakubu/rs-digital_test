import { FunctionComponent, MouseEvent } from 'react';
import { IReview } from '../../../types';
import like from '../../../assets/like.svg';
import styles from './Review.module.scss';

interface IProps {
  review: IReview;
  handleOpenReview: (review: IReview, e: MouseEvent<HTMLDivElement>) => void;
}

const Review: FunctionComponent<IProps> = ({ review, handleOpenReview }) => {
  return (
    <div className={styles.review} onClick={(e) => handleOpenReview(review, e)}>
      <div className={styles.author}>
        <img
          src={review.authorImg}
          alt="author image"
          className={styles.author__img}
        />
        <div className={styles.author__name}>{review.authorName}</div>
      </div>

      <h2 className={styles.review__town}>
        <span>{review.town}</span> — О городе:
      </h2>

      <p className={styles.review__text}>{review.review}</p>

      <div className={styles.review__images}>
        {review.images.slice(0, 4).map((image, i) => (
          <img
            src={image}
            alt="image"
            key={i}
            className={styles.review__image}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.footer__text}>{review.date}</div>
        <div className={styles.footer__spacer} />
        <div className={styles.footer__text}>{review.comments}</div>
        <div className={`${styles.footer__text} ${styles.footer__likes}`}>
          <img src={like} alt="like" />
          {review.likes}
        </div>
      </div>
    </div>
  );
};

export default Review;
