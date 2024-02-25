import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginFormType, userDataType } from '../../types/customType';
import { token } from '../../utils/modules';

// начальное состояние
const initialState: loginFormType = {
  registrationUserData: {},
  authorizationsUserData: {},
};

// регистрация
export const fetchRegistration = createAsyncThunk(
  'loginForm/fetchRegistration',
  async (userData: userDataType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // после задержки, выполняем отправку данных на сервер
    const response = await fetch(
      'https://interns-test-fe.snp.agency/api/v1/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'scope-key': token,
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    console.log('регистрация', data);
    return data;
  }
);

// авторизация
export const fetchAuthorization = createAsyncThunk(
  'loginForm/fetchAuthorization',
  async (userData: userDataType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // после задержки, выполняем отправку данных на сервер
    const response = await fetch(
      'https://interns-test-fe.snp.agency/api/v1/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'scope-key': token,
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    console.log('авторизация', data);
    return data;
  }
);

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setRegistrationUserData(state, action) {
      state.registrationUserData = action.payload;
    },
    setAuthorizationUserData(state, action) {
      state.authorizationsUserData = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     //___управление добавлением данных на сервера
  //     .addCase(fetchRegistration.fulfilled, (state, action) => {
  //       state.loginForm.push(action.payload);
  //     });
  // },
});

export const { setRegistrationUserData, setAuthorizationUserData } =
  loginFormSlice.actions;
export default loginFormSlice.reducer;
