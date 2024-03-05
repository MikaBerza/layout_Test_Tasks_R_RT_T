import { ChangeEvent } from 'react';

// Типы, для элементов DOM
export type InputFieldPropsType = {
  name: string;
  type?: string;
  id: string;
  placeholder?: string;
  pattern?: string;
  hintText?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export type CheckboxFieldPropsType = {
  name: string;
  type: string;
  id: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  text: string;
};

export type ButtonLoginFormType = {
  name: string;
  type: 'submit' | 'reset';
};

export type CardTestPropsType = {
  title: string;
  dateTime: string;
  thePathToEdit?: string;
  pathToTest?: string;
};

// Типы, для данных при регистрации и авторизации пользователя
export type userDataType = {
  username: string;
  password: string;
  password_confirmation?: string;
  is_admin?: boolean;
};

export type responseUserDataType = {
  id: number;
  username: string;
  is_admin: boolean;
};

export type responseDataType = {
  data: responseUserDataType;
  responseIsSuccessful: boolean;
  statusCode: number;
};

export type loginFormType = {
  registrationUserData: userDataType | {};
  authorizationsUserData: userDataType | {};
  isAdmin: boolean;
  isLoading: boolean;
  errorMessage: {
    isError: boolean;
    statusError: string;
  };
};

// Типы,
