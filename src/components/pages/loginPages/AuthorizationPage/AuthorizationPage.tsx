import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  fetchAuthorization,
  fetchGetCurrentUser,
  fetchGetListOfTests,
} from '../../../../redux/slices/loginFormSlice';
import { RootState } from '../../../../redux/store';
import { LogoMain } from '../../../commons/logos';
import { MiddleTitle } from '../../../commons/titles';
import { InputField } from '../../../commons/forms';
import { ButtonLoginForm } from '../../../commons/buttons';
import {
  pathList,
  patternLogo,
  patternPassword,
} from '../../../../utils/modules';
import styles from '../loginPages.module.css';
import { listTest } from '../../../../utils/listTest';
import { UserDataType } from '../../../../types/customType';

const AuthorizationPage = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const { isError } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isError) {
      // переходим по маршруту, на страницу с ошибкой
      navigate(pathList.errorPage);
    }
  }, [isError, navigate]);

  // функция, обработать форму отправки
  const handleFormSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // данные авторизации пользователя
      const userAuthorizationData: UserDataType = {
        username: valueLogin,
        password: valuePassword,
      };
      // авторизация пользователя
      dispatch(fetchAuthorization(userAuthorizationData));
      // получаем список тестов
      dispatch(fetchGetListOfTests(listTest));
      // переход по маршруту, на страницу со списком тестов
      navigate(pathList.testsListPage);
      // очищаем поля ввода
      setValueLogin('');
      setValuePassword('');
      // получаем текущего пользователя после авторизации
      dispatch(fetchGetCurrentUser());
    },
    [dispatch, navigate, valueLogin, valuePassword]
  );

  return (
    <main className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <LogoMain />
        <MiddleTitle title='Авторизация' />
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

AuthorizationPage.displayName = 'AuthorizationPage';
export default AuthorizationPage;
