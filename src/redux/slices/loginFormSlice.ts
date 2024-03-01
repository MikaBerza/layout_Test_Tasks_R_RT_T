import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  loginFormType,
  responseDataType,
  userDataType,
} from '../../types/customType';
import { token } from '../../utils/modules';

// начальное состояние
const initialState: loginFormType = {
  registrationUserData: {},
  authorizationsUserData: {},
  isLoading: false,
  errorMessage: {
    isError: false,
    statusError: '.',
  },
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

    const data: object = await response.json();
    const responseData: responseDataType = {
      data,
      responseIsSuccessful: response.ok,
      statusCode: response.status,
    };
    console.log(responseData);
    return responseData;
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
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsError(state, action) {
      state.errorMessage.isError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //___управление авторизацией пользователя
      .addCase(fetchAuthorization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuthorization.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authorizationsUserData = action.payload;
        console.log('action.payload', action.payload);
        // если HTTP-статус ответа не в диапазоне 200-299
        if (action.payload.responseIsSuccessful === false) {
          // изменяем состояние, для перехода на страницу Errors
          state.errorMessage.isError = true;
          state.errorMessage.statusError = String(action.payload.statusCode);
        } else {
          state.errorMessage.isError = false;
          state.errorMessage.statusError = '.';
        }
      })
      .addCase(fetchAuthorization.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage.isError = true;
      });
  },
});

export const { setRegistrationUserData, setAuthorizationUserData } =
  loginFormSlice.actions;
export default loginFormSlice.reducer;
