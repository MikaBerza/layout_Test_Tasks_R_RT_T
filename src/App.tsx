import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  Registration,
  Authorization,
  TestsListPage,
} from './components/pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout_Test_Tasks_R_RT_T' element={<HomePage />} />
        <Route
          path='/layout_Test_Tasks_R_RT_T/registration'
          element={<Registration />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/authorization'
          element={<Authorization />}
        />
        <Route
          path='/layout_Test_Tasks_R_RT_T/tests-list-page'
          element={<TestsListPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
