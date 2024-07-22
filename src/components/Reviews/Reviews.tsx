import { FunctionComponent, useState, MouseEvent } from 'react';
import cn from 'classnames';
import { Modal, Review } from '..';
import { dataReviews } from '../../data';
import { Button } from '../UI';
import useHorizontalScroll from '../../helpers/useHorizontalScroll';
import styles from './Reviews.module.scss';
import { IReview } from '../../types';

const Reviews: FunctionComponent = () => {
  const containerRef = useHorizontalScroll();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState<IReview>(dataReviews[0]);
  const handleOpenReview = (review: IReview, e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
    setCurrentReview(review);
  };

  return (
    <>
      <section className={styles.reviews}>
        <h1 className={styles.reviews__title}>Отзывы о Барселоне</h1>

        <div className={styles.slider} ref={containerRef}>
          {dataReviews.map((review, i) => (
            <Review
              key={`review-${i}`}
              review={review}
              handleOpenReview={handleOpenReview}
            />
          ))}
        </div>

        <div className={styles.reviews__footer}>
          <Button className={styles.reviews__button}>Все отзывы</Button>
          <div className={styles.reviews__dots}>
            {[...Array(6)].map((_, i) => (
              <div
                key={`dot-${i}`}
                className={cn(styles.reviews__dot, {
                  [styles['reviews__dot-active']]: i === 0,
                })}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={modalOpen}
        review={currentReview}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Reviews;
