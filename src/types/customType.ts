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
