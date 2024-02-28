import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchRegistration } from '../../../redux/slices/loginFormSlice';
import { Logo } from '../../commons/Logo';
import { FormTitle } from '../../commons/Titles';
import { InputField, CheckboxField } from '../../commons/forms';
import { ButtonLoginForm } from '../../commons/buttons';
import styles from './Registration.module.css';
import { userDataType } from '../../../types/customType';

const Registration = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const dispatch = useAppDispatch();

  // обработать форму отправки
  const handleFormSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // данные регистрации пользователя
      const userRegistrationData: userDataType = {
        username: valueLogin,
        password: valuePassword,
        password_confirmation: valueConfirmPassword,
        is_admin: isAdmin,
      };
      // регистрация пользователя
      dispatch(fetchRegistration(userRegistrationData));
      // очищаем поля ввода
      setValueLogin('');
      setValuePassword('');
      setValueConfirmPassword('');
      setIsAdmin(false);
    },
    [dispatch, isAdmin, valueConfirmPassword, valueLogin, valuePassword]
  );

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
          pattern='[A-Za-z]{6,8}'
          hintText='Формат: от шести до восьми латинских букв'
          maxLength={8}
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
        />
        <InputField
          name='registrationPassword'
          type='password'
          id='registrationPassword'
          placeholder='Пароль'
          pattern='[0-9]{6,8}'
          hintText='Формат: от шести до восьми цифр'
          maxLength={8}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <InputField
          name='registrationConfirmYourPassword'
          type='password'
          id='registrationConfirmYourPassword'
          placeholder='Подтвердите свой пароль'
          pattern={`${valuePassword}`}
          maxLength={8}
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
        <ButtonLoginForm
          path='/layout_Test_Tasks_R_RT_T/authorization'
          name='Зарегистрировать'
          type='submit'
        />
      </form>
    </div>
  );
};

Registration.displayName = 'Registration';
export default Registration;
