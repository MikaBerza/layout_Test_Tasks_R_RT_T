import React from 'react';
import styles from './InputField.module.css';
import { InputFieldPropsType } from '../../../../types/customType';

const InputField = ({
  name,
  type,
  id,
  placeholder,
  pattern,
  hintText,
  maxLength,
  onChange,
  value,
}: InputFieldPropsType) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const passwordVisibilitySwitch = React.useMemo(() => {
    return (
      <span
        className={styles.switchLogo}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? '🐵' : '🙈'}
      </span>
    );
  }, [showPassword, setShowPassword]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        name={name}
        type={showPassword || type === 'text' ? 'text' : 'password'}
        id={id}
        autoComplete='off'
        placeholder={placeholder}
        pattern={pattern}
        title={hintText}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        required
      />
      {type === 'password' && passwordVisibilitySwitch}
    </div>
  );
};

/* Оптимизируем компонент от лишних перерисовок
compareInputValues сравнивает значение (value) prevProps и nextProps, 
если значение (value) не изменилось, то функция вернет true, 
что позволит React пропустить повторное рендеринг компонента */
// функция, сравнить входные значения
const compareInputValues = (
  prevProps: InputFieldPropsType,
  nextProps: InputFieldPropsType
) => {
  return prevProps.value === nextProps.value;
};

InputField.displayName = 'InputField';
export default React.memo(InputField, compareInputValues);
