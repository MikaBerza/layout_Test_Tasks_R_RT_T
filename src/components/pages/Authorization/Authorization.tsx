import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchAuthorization } from '../../../redux/slices/loginFormSlice';
import { Logo } from '../../commons/Logo';
import { FormTitle } from '../../commons/Titles';
import { InputField } from '../../commons/forms';
import styles from './Authorization.module.css';
import { userDataType } from '../../../types/customType';

const Authorization = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    // данные авторизации пользователя
    const userAuthorizationData: userDataType = {
      username: valueLogin,
      password: valuePassword,
    };
    // Авторизация пользователя
    dispatch(fetchAuthorization(userAuthorizationData));
  };

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
          pattern='[A-Za-z]{3,6}'
          hintText='Формат: от трех до шести латинских букв'
          maxLength={6}
          onChange={(e) => setValueLogin(e.target.value)}
          value={valueLogin}
        />
        <InputField
          name='authorizationsPassword'
          type='password'
          id='authorizationsPassword'
          placeholder='Пароль'
          pattern='[0-9]{3,6}'
          hintText='Формат: от трех до шести цифр'
          maxLength={6}
          onChange={(e) => setValuePassword(e.target.value)}
          value={valuePassword}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type='submit'>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

Authorization.displayName = 'Authorization';
export default Authorization;
