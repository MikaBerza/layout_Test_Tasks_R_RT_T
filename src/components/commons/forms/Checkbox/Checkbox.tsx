import React from 'react';
import styles from './Checkbox.module.css';
import { CheckboxPropsType } from '../../../../types/customType';

const Checkbox = ({
  id,
  checked,
  onChange,
  htmlFor,
  text,
}: CheckboxPropsType) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        name='checkbox'
        type='checkbox'
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <label className={styles.checkbox} htmlFor={htmlFor} />
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
  prevProps: CheckboxPropsType,
  nextProps: CheckboxPropsType
) => {
  return prevProps.checked === nextProps.checked;
};

Checkbox.displayName = 'Checkbox';
export default React.memo(Checkbox, compareInputValues);
