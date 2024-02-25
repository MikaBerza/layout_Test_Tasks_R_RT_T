import React from 'react';
import styles from './CheckboxField.module.css';
import { CheckboxFieldPropsType } from '../../../../types/customType';

const CheckboxField = ({
  name,
  type,
  id,
  checked,
  onChange,
  htmlFor,
  text,
}: CheckboxFieldPropsType) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        name={name}
        type={type}
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
  prevProps: CheckboxFieldPropsType,
  nextProps: CheckboxFieldPropsType
) => {
  return prevProps.checked === nextProps.checked;
};

CheckboxField.displayName = 'CheckboxField';
export default React.memo(CheckboxField, compareInputValues);
