import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Exhibitors from './Pages/visitors/exhibitors/exhibitors';
import Loading from './Pages/visitors/loading';
import Home from './Pages/visitors/home/home';
import Events from './Pages/visitors/events/events';
import Schedule from './Pages/visitors/schedule/schedule';


=======
import NavigationBar from './components/navigationBar/menu';
import './fonts/Montserrat/Montserrat-Regular.ttf';
>>>>>>> 358660b (feat: add menu buttons)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path='visitors/facialRecognitionLoading' element={<Loading />} ></Route>
        <Route path='visitors/facialRecognitionFailed' element={<Loading />} ></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route path='visitors/exhibitors' element={<Exhibitors />} ></Route>
        <Route path='visitors/events' element={<Events />} ></Route>
        <Route path='visitors/schedule' element={<Schedule />} ></Route>
      </Routes>
=======
      <NavigationBar></NavigationBar>
>>>>>>> 358660b (feat: add menu buttons)
    </div>
  );
}

export default App;
