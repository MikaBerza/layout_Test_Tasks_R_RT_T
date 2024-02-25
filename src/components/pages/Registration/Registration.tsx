import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchRegistration } from '../../../redux/slices/loginFormSlice';
import { Logo } from '../../commons/Logo';
import { FormTitle } from '../../commons/Titles';
import { InputField, CheckboxField } from '../../commons/forms';
import styles from './Registration.module.css';
import { userDataType } from '../../../types/customType';

const Registration = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    // данные регистрации пользователя
    const userRegistrationData: userDataType = {
      username: valueLogin,
      password: valuePassword,
      password_confirmation: valueConfirmPassword,
      is_admin: isAdmin,
    };
    // Регистрация пользователя
    dispatch(fetchRegistration(userRegistrationData));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <Logo />
        <FormTitle text='Регистрация' />
        <InputField
          name='registrationLogin'
          type='text'
          id='registrationLogin'
          placeholder='Логин'
          pattern='[A-Za-z]{3,6}'
          hintText='Формат: от трех до шести латинских букв'
          maxLength={6}
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
        />
        <InputField
          name='registrationPassword'
          type='password'
          id='registrationPassword'
          placeholder='Пароль'
          pattern='[0-9]{3,6}'
          hintText='Формат: от трех до шести цифр'
          maxLength={6}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <InputField
          name='registrationConfirmYourPassword'
          type='password'
          id='registrationConfirmYourPassword'
          placeholder='Подтвердите свой пароль'
          pattern={`${valuePassword}`}
          maxLength={6}
          hintText='Пароль не подтвержден!'
          onChange={(e) => setValueConfirmPassword(e.target.value)}
          value={valueConfirmPassword}
        />
        <CheckboxField
          name='registrationCheckbox'
          type='checkbox'
          id='registrationCheckbox'
          onChange={(e) => setIsAdmin(e.target.checked)}
          checked={isAdmin}
          htmlFor='registrationCheckbox'
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
