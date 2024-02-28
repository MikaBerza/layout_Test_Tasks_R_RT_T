import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchAuthorization } from '../../../redux/slices/loginFormSlice';
import { Logo } from '../../commons/Logo';
import { FormTitle } from '../../commons/Titles';
import { InputField } from '../../commons/forms';
import { ButtonLoginForm } from '../../commons/buttons';
import styles from './Authorization.module.css';
import { userDataType } from '../../../types/customType';

const Authorization = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const dispatch = useAppDispatch();

  // обработать форму отправки
  const handleFormSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // данные авторизации пользователя
      const userAuthorizationData: userDataType = {
        username: valueLogin,
        password: valuePassword,
      };
      // авторизация пользователя
      dispatch(fetchAuthorization(userAuthorizationData));
      // очищаем поля ввода
      setValueLogin('');
      setValuePassword('');
    },
    [dispatch, valueLogin, valuePassword]
  );

  return (
    <div className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <Logo />
        <FormTitle text='Авторизация' />
        <InputField
          name='authorizationLogin'
          type='text'
          id='authorizationLogin'
          placeholder='Логин'
          pattern='[A-Za-z]{6,8}'
          hintText='Формат: от шести до восьми латинских букв'
          maxLength={8}
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
        />
        <InputField
          name='authorizationsPassword'
          type='password'
          id='authorizationsPassword'
          placeholder='Пароль'
          pattern='[0-9]{6,8}'
          hintText='Формат: от шести до восьми цифр'
          maxLength={8}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <ButtonLoginForm
          path='/layout_Test_Tasks_R_RT_T/tests-list-page'
          name='Войти'
          type='submit'
        />
      </form>
    </div>
  );
};

Authorization.displayName = 'Authorization';
export default Authorization;
