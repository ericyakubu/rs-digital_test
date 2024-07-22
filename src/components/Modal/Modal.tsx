import { FunctionComponent, MouseEvent, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import like from '../../assets/like.svg';
import { IReview } from '../../types';
import { Button } from '../UI';

interface IProps {
  open: boolean;
  review: IReview;
  onClose: () => void;
}

const Modal: FunctionComponent<IProps> = ({ open, onClose, review }) => {
  const [chosenImg, setChosenImg] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <div
          className={styles.overlay}
          ref={overlayRef}
          onClick={handleCloseModal}
        >
          <div className={styles.modal}>
            <div className={styles.modal__images}>
              <img
                src={review.images[chosenImg]}
                alt=""
                className={styles.modal__image}
              />

              <div className={styles.modal__images_container}>
                {review.images.map((image, i) => (
                  <img
                    src={image}
                    alt=""
                    className={styles.modal__image_small}
                    key={i}
                    onClick={() => setChosenImg(i)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.user}>
                <img
                  src={review.authorImg}
                  alt=""
                  className={styles.user__img}
                />
                <h1 className={styles.user__name}>{review.authorName}</h1>
              </div>

              <h1 className={styles.content__title}>
                <span>{review.town}</span> — О городе:
              </h1>

              <p className={styles.content__text}>{review.review}</p>
              <div className={styles.footer}>
                <div className={styles.footer__text}>{review.date}</div>
                <div className={styles.footer__spacer} />
                <div className={styles.footer__text}>{review.comments}</div>
                <Button
                  className={`${styles.footer__text} ${styles.footer__likes}`}
                >
                  <img src={like} alt="like" />
                  {review.likes}
                </Button>
              </div>
            </div>

            <Button className={styles.close} onClick={onClose}>
              <div className={styles.close__icon} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
