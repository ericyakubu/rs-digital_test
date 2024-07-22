import { FunctionComponent, useState } from 'react';
import Chat from './Chat';
import styles from './Chats.module.scss';
import { dataChatMessages } from '../../data';
import { IMessage } from '../../types';

const Chats: FunctionComponent = () => {
  const [messages, setMessages] = useState<IMessage[]>(dataChatMessages);
  return (
    <section className={styles.chats}>
      <Chat type="user" messages={messages} setMessages={setMessages} />
      <div className={styles.chats__separator} />
      <Chat type="admin" messages={messages} setMessages={setMessages} />
    </section>
  );
};

export default Chats;
