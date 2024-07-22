import { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Message.module.scss';

interface IProps {
  message: {
    sender: string;
    message: string;
    date: string;
  };
  className?: string;
}

const Message: FunctionComponent<IProps> = ({ message, className }) => {
  return (
    <div className={cn(styles.message, className)}>
      <img
        src={
          message.sender === 'admin'
            ? './images/user1.png'
            : './images/user2.png'
        }
        alt=""
        className={styles.message__img}
      />

      <div className={styles.message__info}>
        <p className={styles.message__text}>{message.message}</p>
        <span className={styles.message__date}>{message.date}</span>
      </div>
    </div>
  );
};

export default Message;
