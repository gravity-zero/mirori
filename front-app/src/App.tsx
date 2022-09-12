import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Exhibitors from './pages/visitors/exhibitors/exhibitors';
import Loading from './pages/visitors/loading';
import Home from './pages/visitors/home/home';
import Events from './pages/visitors/events/events';
import Schedule from './pages/visitors/schedule/schedule';
import { Header } from './components/header/header';
import FacialRecognitionFailed from './pages/visitors/facialRecognitionFailed';
import StandbyMode from './pages/visitors/standbyMode';
import AuthFacialRecognition from './pages/visitors/authFacialRecognition';
import ValueTokenProvider from './Context/useIsLogin';


function App() {

  return (
    <div className="App">

      <ValueTokenProvider>
        <Header />
        <Routes>

          <Route path='visitors/facialRecognitionLoading' element={<Loading />} ></Route>
          <Route path='visitors/facialRecognitionFailed' element={<FacialRecognitionFailed />} ></Route>

          <Route path='visitors/authFacialRecognition/:jwt' element={<AuthFacialRecognition />} ></Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='visitors/exhibitors' element={<Exhibitors />} ></Route>
          <Route path='visitors/events' element={<Events />} ></Route>
          <Route path='visitors/schedule' element={<Schedule />} ></Route>
          <Route path='visitors/standbyMode' element={<StandbyMode />} ></Route>
        </Routes>
      </ValueTokenProvider>

    </div>
  );
}

export default App;
