import React, { useContext } from 'react';
// import { valueContext } from './Context/useIsMobile';
import { Routes, Route } from 'react-router-dom'
import Exhibitors from './pages/visitors/exhibitors/exhibitors';
import Loading from './pages/visitors/loading';
import Home from './pages/visitors/home/home';
import Events from './pages/visitors/events/events';
import Schedule from './pages/visitors/schedule/schedule';
import ValueContextProvider from './Context/useIsMobile';
import Header from './components/header/header';



function App() {

  return (
    <div className="App">
      <ValueContextProvider>
        <Header />
        <Routes>
          <Route path='visitors/facialRecognitionLoading' element={<Loading />} ></Route>
          <Route path='visitors/facialRecognitionFailed' element={<Loading />} ></Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='visitors/exhibitors' element={<Exhibitors />} ></Route>
          <Route path='visitors/events' element={<Events />} ></Route>
          <Route path='visitors/schedule' element={<Schedule />} ></Route>
        </Routes>
      </ValueContextProvider>
    </div>
  );
}

export default App;
