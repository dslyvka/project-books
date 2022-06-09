import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//Сделать Lazy-loading всего этого- и возможно экспортировать в общий index.js, или нет
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import TrainingPage from './pages/trainingPage/trainingPage';
import StatisticsPage from './pages/statisticsPage/statisticsPage';
import LibraryPage from './pages/libraryPage/libraryPage';
import Header from './components/Header/Header';
import QuoteSection from './components/QuoteSection/QuoteSection';
import LibraryResumeModal from './components/LibraryResumeModal/Resume/Resume';

import './App.css';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';

import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const onlyWidth = useWindowWidth();

  return (
    //Придумать позже функционал вместо Loading- спиннер и тп
    //Приватные и Публичные роуты сделать
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={onlyWidth < 768 ? <QuoteSection /> : <LoginPage />}
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="library" element={<LibraryPage />}>
            <Route path=":id" element={<LibraryResumeModal />} />
          </Route>
          <Route path="training" element={<TrainingPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="*" element={<Navigate to="library" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
