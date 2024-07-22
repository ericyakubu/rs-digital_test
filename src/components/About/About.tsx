import { FunctionComponent } from 'react';
import { dataAbout } from '../../data';
import { Button } from '../UI';
import styles from './About.module.scss';

const About: FunctionComponent = () => {
  return (
    <section className={styles.about}>
      <img
        src={dataAbout.image}
        alt="about image"
        className={styles.about__img}
      />

      <div className={styles.description}>
        <h1 className={styles.description__title}>{dataAbout.title}</h1>
        <p className={styles.description__text}>{dataAbout.text}</p>
        <Button className={styles.description__btn}>Читать дальше</Button>
      </div>
    </section>
  );
};

export default About;
