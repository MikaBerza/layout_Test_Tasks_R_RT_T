import React from 'react';
import { listTest } from '../../../utils/listTest';
import { CardTest } from '../../commons/CardTest';
import styles from './CardsList.module.css';
import { TestDataItemPropsType } from '../../../types/customType';

const CardsList = () => {
  return (
    <section className={styles.wrapper}>
      {listTest.map((item: TestDataItemPropsType, index: number) => (
        <CardTest key={index} item={item} index={index} />
      ))}
    </section>
  );
};

CardsList.displayName = 'CardsList';
export default CardsList;
