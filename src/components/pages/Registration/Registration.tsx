import React from 'react';
import { Logo } from '../../commons/Logo';
import { FormTitle } from '../../commons/Titles';
import { InputField, CheckboxField } from '../../commons/forms';
import styles from './Registration.module.css';

const Registration = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');
  const [valueChecked, setValueChecked] = React.useState(false);

  const handleFormSubmit = (event: any) => {
    // Отменяет действие по умолчанию, просим форму не отправлять данные самостоятельно
    event.preventDefault();

    const dataForm = {
      valueLogin,
      valuePassword,
      valueConfirmPassword,
      valueChecked,
    };
    const json = JSON.stringify(dataForm);
    const obj = JSON.parse(json);
    console.log('Отправка!, json', json);
    console.log('Отправка!, obj', obj);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <Logo />
        <FormTitle text='Регистрация' />
        <InputField
          name='login'
          type='text'
          id='login'
          placeholder='Логин'
          pattern='[A-Za-z]{3,6}'
          hintText='Формат: от трех до шести латинских букв'
          maxLength={6}
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
        />
        <InputField
          name='password'
          type='password'
          id='password'
          placeholder='Пароль'
          pattern='[0-9]{3,6}'
          hintText='Формат: от трех до шести цифр'
          maxLength={6}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <InputField
          name='confirmYourPassword'
          type='password'
          id='confirmYourPassword'
          placeholder='Подтвердите свой пароль'
          pattern={`${valuePassword}`}
          maxLength={6}
          hintText='Пароль не подтвержден!'
          onChange={(e) => setValueConfirmPassword(e.target.value)}
          value={valueConfirmPassword}
        />
        <CheckboxField
          name='checkbox'
          type='checkbox'
          id='checkbox'
          onChange={(e) => setValueChecked(e.target.checked)}
          checked={valueChecked}
          htmlFor='checkbox'
          text='вы администратор?'
        />
        <div className={styles.buttons}>
          <button className={styles.button} type='submit'>
            Зарегистрировать
          </button>
        </div>
      </form>
    </div>
  );
};

Registration.displayName = 'Registration';
export default Registration;
