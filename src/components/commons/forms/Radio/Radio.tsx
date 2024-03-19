import React from 'react';
import styles from './Radio.module.css';
import { RadioPropsType } from '../../../../types/customType';

const Radio = ({ id, checked, onChange, value, text }: RadioPropsType) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.radio}
        name='radio'
        type='radio'
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.switch} htmlFor={id} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

/* Оптимизируем компонент от лишних перерисовок
compareInputValues сравнивает значение (checked) prevProps и nextProps, 
если значение (checked) не изменилось, то функция вернет true, 
что позволит React пропустить повторное рендеринг компонента */
// функция, сравнить входные значения
const compareInputValues = (
  prevProps: RadioPropsType,
  nextProps: RadioPropsType
) => {
  return prevProps.checked === nextProps.checked;
};

Radio.displayName = 'Radio';
export default React.memo(Radio, compareInputValues);
