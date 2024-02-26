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

export type loginFormType = {
  registrationUserData: userDataType | {};
  authorizationsUserData: userDataType | {};
};

export type ButtonLoginFormType = {
  name: string;
  type: 'submit' | 'reset';
};
