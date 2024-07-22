import { FunctionComponent, useEffect, useRef } from 'react';
import Message from '../Message';
import { dataChatUsers } from '../../../data';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IMessage } from '../../../types';

import styles from './Chat.module.scss';
import { Input } from '../../UI';

interface IProps {
  type: 'user' | 'admin';
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

type Inputs = {
  message: string;
};

const Chat: FunctionComponent<IProps> = ({ type, messages, setMessages }) => {
  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const messagesRef = useRef<HTMLDivElement>(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setMessages([
      ...messages,
      {
        message: data.message,
        sender: type === 'user' ? 'admin' : 'user',
        date: 'только что',
      },
    ]);

    resetField('message');
  };

  useEffect(() => {
    const container = messagesRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.chat}>
      <h1 className={styles.chat__head}>
        Чат с {type === 'user' ? 'пользователем' : 'администратором'}
      </h1>

      <div className={styles.chat__body}>
        <div className={styles.user}>
          <img
            src={
              type === 'user' ? dataChatUsers.user.img : dataChatUsers.admin.img
            }
            alt="user avatar"
            className={styles.user__img}
          />

          <div className={styles.user__info}>
            <h2 className={styles.user__name}>
              {type === 'user'
                ? dataChatUsers.user.name
                : dataChatUsers.admin.name}
            </h2>
            <h3 className={styles.user__position}>
              <img src="./icons/flag.png" alt="flag" />
              {type === 'user'
                ? dataChatUsers.user.position
                : dataChatUsers.admin.position}
            </h3>
          </div>

          {type === 'user' && (
            <div className={styles.user__rating}>
              <img src={'./icons/rating.png'} alt="" />
            </div>
          )}
        </div>

        <div className={styles.chat__messages} ref={messagesRef}>
          {messages.map((message, index) => (
            <Message
              key={index}
              message={message}
              className={type === message.sender ? styles.message : ''}
            />
          ))}
        </div>

        <form className={styles.sender} onSubmit={handleSubmit(onSubmit)}>
          <img
            src={
              type === 'user' ? dataChatUsers.admin.img : dataChatUsers.user.img
            }
            alt="user avatar"
            className={styles.sender__img}
          />
          <Input
            {...register('message')}
            type="text"
            placeholder="Напишите сообщение..."
          />
          <button type="submit">
            <img
              src="./icons/send.png"
              alt="send"
              className={styles.sender__send}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
