import { useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  RegistrationPage,
  AuthorizationPage,
  TestsListPage,
  ErrorPage,
} from './components/pages';
import { Loading } from './components/commons/Loading';
import './App.css';

function App() {
  const { isLoading } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout_Test_Tasks_R_RT_T' element={<HomePage />} />
        <Route
          path='/layout_Test_Tasks_R_RT_T/registration'
          element={<RegistrationPage />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/authorization'
          element={isLoading ? <Loading /> : <AuthorizationPage />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/tests-list-page'
          element={isLoading ? <Loading /> : <TestsListPage />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/error'
          element={isLoading ? <Loading /> : <ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
