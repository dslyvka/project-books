import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//Сделать Lazy-loading всего этого- и возможно экспортировать в общий index.js, или нет
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import TrainingPage from './pages/trainingPage/trainingPage';
import StatisticsPage from './pages/statisticsPage/statisticsPage';
import LibraryPage from './pages/libraryPage/libraryPage';
import Header from './components/header/Header';

import './App.css';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';

function App() {
  return (
    //Придумать позже функционал вместо Loading- спиннер и тп
    //При неверном вводе раута сделать перенаправление на LibraryPage c автоисправлением адреса
    //Приватные и Публичные роуты сделать
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="*" element={<LibraryPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
