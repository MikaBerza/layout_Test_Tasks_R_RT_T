import { ChangeEvent } from 'react';

export type PathListType = {
  homePage: string;
  registration: string;
  authorization: string;
  testsListPage: string;
  testPage: string;
  errorPage: string;
  githubPage: string;
};

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

export type CheckboxPropsType = {
  id: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  text: string;
};

export type RadioPropsType = {
  id: string;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  text: string;
};

export type SelectPropsType = {
  label: string;
  listOptions: string[];
};

export type ButtonLoginFormPropsType = {
  name: string;
  type: 'submit' | 'reset';
};

export type ButtonCreateTestPropsType = {
  patch: string;
  name: string;
};

export type CardTestPropsType = {
  id: string;
  title: string;
  dateTime: string;
  thePathToEdit?: string;
  pathToTest?: string;
};

// Типы, для loginFormSlice
export type UserDataType = {
  username: string;
  password: string;
  password_confirmation?: string;
  is_admin?: boolean;
};

export type ResponseUserDataType = {
  id: number;
  username: string;
  is_admin: boolean;
};

export type ResponseDataType = {
  data: ResponseUserDataType;
  responseIsSuccessful: boolean;
  statusCode: number;
};

export type TestDataItemPropsType = {
  id: string;
  title: string;
  questionType: string;
  test: {
    question: string;
    answersOptions: {
      id: string;
      value: string;
      answer: string;
    }[];
    rightAnswer: string;
  }[];
  dateTime: string;
};

export type LoginFormInitialStateType = {
  registrationUserData: UserDataType | {};
  authorizationsUserData: UserDataType | {};
  isAdmin: boolean;
  errorMessage: {
    statusError: string;
  };
  //
  isLoading: boolean;
  isError: boolean;
  //
  testListData: TestDataItemPropsType[];
  testListItemData: TestDataItemPropsType;
};
