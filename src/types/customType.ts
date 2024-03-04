import { ChangeEvent } from 'react';

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

export type userDataType = {
  username: string;
  password: string;
  password_confirmation?: string;
  is_admin?: boolean;
};

export type ButtonLoginFormType = {
  name: string;
  type: 'submit' | 'reset';
};

export type loginFormType = {
  registrationUserData: userDataType | {};
  authorizationsUserData: userDataType | {};
  isLoading: boolean;
  errorMessage: {
    isError: boolean;
    statusError: string;
  };
};

export type responseDataType = {
  data: object;
  responseIsSuccessful: boolean;
  statusCode: number;
};

export type CardTestPropsType = {
  title: string;
  dateTime: string;
  thePathToEdit?: string;
  pathToTest: string;
};
