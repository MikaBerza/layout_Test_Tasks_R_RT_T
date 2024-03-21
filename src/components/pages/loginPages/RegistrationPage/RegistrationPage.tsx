import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks';
import { fetchRegistration } from '../../../../redux/slices/loginFormSlice';
import { LogoMain } from '../../../commons/logos';
import { MiddleTitle } from '../../../commons/titles';
import { InputField, Checkbox } from '../../../commons/forms';
import { ButtonLoginForm } from '../../../commons/buttons';
import { pathList } from '../../../../utils/modules';
import styles from '../loginPages.module.css';
import { UserDataType } from '../../../../types/customType';

const RegistrationPage = () => {
  const [valueLogin, setValueLogin] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueConfirmPassword, setValueConfirmPassword] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // функция, обработать форму отправки
  const handleFormSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // данные регистрации пользователя
      const userRegistrationData: UserDataType = {
        username: valueLogin,
        password: valuePassword,
        password_confirmation: valueConfirmPassword,
        is_admin: isAdmin,
      };
      // регистрация пользователя
      dispatch(fetchRegistration(userRegistrationData));
      // переход по маршруту, на страницу авторизации
      navigate(pathList.authorization);
      // очищаем поля ввода
      setValueLogin('');
      setValuePassword('');
      setValueConfirmPassword('');
      setIsAdmin(false);
    },
    [
      dispatch,
      isAdmin,
      navigate,
      valueConfirmPassword,
      valueLogin,
      valuePassword,
    ]
  );

  return (
    <main className={styles.wrapper}>
      <form className={styles.inner} onSubmit={handleFormSubmit}>
        <LogoMain />
        <MiddleTitle title='Регистрация' />
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
        <Checkbox
          id='registrationCheckbox'
          onChange={(e) => setIsAdmin(e.target.checked)}
          checked={isAdmin}
          htmlFor='registrationCheckbox'
          text='вы администратор?'
        />
        <ButtonLoginForm name='Зарегистрировать' type='submit' />
      </form>
    </main>
  );
};

RegistrationPage.displayName = 'RegistrationPage';
export default RegistrationPage;
