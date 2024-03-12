import { useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pathList } from './utils/modules';
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
        <Route path={pathList.homePage} element={<HomePage />} />
        <Route path={pathList.registration} element={<RegistrationPage />} />
        <Route
          path={pathList.authorization}
          element={isLoading ? <Loading /> : <AuthorizationPage />}
        />
        <Route
          path={pathList.testsListPage}
          element={isLoading ? <Loading /> : <TestsListPage />}
        />
        <Route
          path={pathList.errorPage}
          element={isLoading ? <Loading /> : <ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
