import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import Exhibitors from './Pages/visitors/exhibitors/exhibitors';
import Loading from './Pages/visitors/loading';
import Home from './Pages/visitors/home/home';
import Events from './Pages/visitors/events/events';
import Schedule from './Pages/visitors/schedule/schedule';


=======
import NavigationBar from './components/navigationBar/menu';
=======
import NavigationBarMiror from './components/navigationBarMiror/navMiror';
>>>>>>> 7df28c8 (create miror menu component)
import './fonts/Montserrat/Montserrat-Regular.ttf';
>>>>>>> 358660b (feat: add menu buttons)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      <NavigationBar
      onClickHome={() => console.log("You clicked on onClickHome")}
      onClickSearch={() => console.log("You clicked on onClickSearch")}
      onClickAgenda={() => console.log("You clicked on onClickAgenda")}
      onClickRecommendation={() => console.log("You clicked on onClickRecommendation")}
      ></NavigationBar>
>>>>>>> 10b8b65 (Feat: Handles clicks on menu buttons)
=======
      <NavigationBarMiror
      onClickHome={() => console.log("You clicked on onClickHome")}
      onClickSearch={() => console.log("You clicked on onClickSearch")}
      onClickAgenda={() => console.log("You clicked on onClickAgenda")}
      onClickRecommendation={ () => console.log("You clicked on onClickRecommendation")}
      ></NavigationBarMiror>
>>>>>>> 7df28c8 (create miror menu component)
    </div>
  );
}

export default App;
