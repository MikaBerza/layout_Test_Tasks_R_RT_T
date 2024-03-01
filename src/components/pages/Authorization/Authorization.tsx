import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { fetchAuthorization } from '../../../redux/slices/loginFormSlice';
import { LogoMain } from '../../commons/logos';
import { TitleLoginForm } from '../../commons/titles';
import {
  patternLogo,
  patternPassword,
} from '../../../utils/modules';
import { InputField } from '../../commons/forms';
import { ButtonLoginForm } from '../../commons/buttons';
import styles from './Authorization.module.css';
import { userDataType } from '../../../types/customType';

const Authorization = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      // переход по маршруту, на страницу со списком тестов
      navigate('/layout_Test_Tasks_R_RT_T/tests-list-page');
      // очищаем поля ввода
      setValueLogin('');
      setValuePassword('');
    },
    [dispatch, navigate, valueLogin, valuePassword]
  );

  return (
    <main className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <LogoMain />
        <TitleLoginForm text='Авторизация' />
        <InputField
          name='authorizationLogin'
          type='text'
          id='authorizationLogin'
          placeholder='Логин'
          pattern={patternLogo}
          hintText='Формат: от шести до восьми латинских букв'
          maxLength={8}
          onChange={(e) => {
            setValueLogin(e.target.value);
          }}
          value={valueLogin}
        />
        <InputField
          name='authorizationsPassword'
          type='password'
          id='authorizationsPassword'
          placeholder='Пароль'
          pattern={patternPassword}
          hintText='Формат: от шести до восьми цифр'
          maxLength={8}
          onChange={(e) => {
            setValuePassword(e.target.value);
          }}
          value={valuePassword}
        />
        <ButtonLoginForm name='Войти' type='submit' />
      </form>
    </main>
  );
};

Authorization.displayName = 'Authorization';
export default Authorization;
