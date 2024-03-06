import { useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/commons/Header';
import {
  HomePage,
  Registration,
  Authorization,
  TestsListPage,
  ErrorPage,
} from './components/pages';
import { Loading } from './components/commons/Loading';
import { Footer } from './components/commons/Footer';
import './App.css';

function App() {
  const { isLoading } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/layout_Test_Tasks_R_RT_T'
          element={
            <>
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/registration'
          element={<Registration />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/authorization'
          element={isLoading ? <Loading /> : <Authorization />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/tests-list-page'
          element={
            isLoading ? (
              <Loading />
            ) : (
              <>
                <Header />
                <TestsListPage />
                <Footer />
              </>
            )
          }
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/error'
          element={
            isLoading ? (
              <Loading />
            ) : (
              <>
                <Header />
                <ErrorPage />
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
