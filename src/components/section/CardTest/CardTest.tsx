import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { ButtonEdit } from '../../commons/buttons';
import { MinorText } from '../../commons/MinorText';
import { listTest } from '../../../utils/listTest';
import image from '../../../assets/images/test.png';
import styles from './CardTest.module.css';
import { CardTestType } from '../../../types/customType';

const CardTest = () => {
  const { isAdmin } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  /* Примечание:
  -длина текста в title не должна превышать 110 знаков с пробелом,
  в противном случае лишний текст будет скрываться */

  const card = React.useCallback(
    (item: CardTestType) => {
      return (
        <div className={styles.inner} key={item.keyId}>
          {isAdmin && <ButtonEdit path='#' />}
          <div className={styles.content}>
            <img className={styles.image} src={image} alt='img' />
            <h3 className={styles.title}>{item.title}</h3>
            <Link className={styles.linkBtn} to='#'>
              <button className={styles.btn} />
            </Link>
          </div>

          <div className={styles.dateTime}>
            <MinorText str={item.dateTime} />
          </div>
        </div>
      );
    },
    [isAdmin]
  );

  return (
    <section className={styles.wrapper}>
      {listTest.map((item) => card(item))}
    </section>
  );
};

CardTest.displayName = 'CardTest';
export default React.memo(CardTest);
