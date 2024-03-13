import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  userDataType,
  responseUserDataType,
  responseDataType,
  loginFormType,
} from '../../types/customType';
import { token } from '../../utils/modules';

// начальное состояние
const initialState: loginFormType = {
  registrationUserData: {},
  authorizationsUserData: {},
  isAdmin: true,
  isLoading: false,
  isError: false,
  errorMessage: {
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
    const data: responseUserDataType = await response.json();
    const responseData: responseDataType = {
      data,
      responseIsSuccessful: response.ok,
      statusCode: response.status,
    };
    // console.log(responseData);
    return responseData;
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

    const data: responseUserDataType = await response.json();
    const responseData: responseDataType = {
      data,
      responseIsSuccessful: response.ok,
      statusCode: response.status,
    };
    // console.log(responseData);
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
    setIsAdmin(state, action) {
      state.isAdmin = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      //___управление регистрацией пользователя
      .addCase(fetchRegistration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authorizationsUserData = action.payload;
        // если HTTP-статус ответа не в диапазоне 200-299
        if (action.payload.responseIsSuccessful === false) {
          state.isError = true;
          state.errorMessage.statusError = String(action.payload.statusCode);
        } else {
          state.isError = false;
          state.errorMessage.statusError = '.';
        }
      })
      .addCase(fetchRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error('An error occurred:', action.error.message);
      })
      //___управление авторизацией пользователя
      .addCase(fetchAuthorization.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuthorization.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authorizationsUserData = action.payload;
        // если HTTP-статус ответа не в диапазоне 200-299
        if (action.payload.responseIsSuccessful === false) {
          state.isError = true;
          state.errorMessage.statusError = String(action.payload.statusCode);
        } else {
          state.isAdmin = action.payload.data.is_admin;
          state.isError = false;
          state.errorMessage.statusError = '.';
        }
      })
      .addCase(fetchAuthorization.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error('An error occurred:', action.error.message);
      });
  },
});

export const { setRegistrationUserData, setAuthorizationUserData } =
  loginFormSlice.actions;
export default loginFormSlice.reducer;
