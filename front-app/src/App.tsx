import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Exhibitors from './Pages/exhibitors/exhibitors';
import Loading from './Pages/exhibitors/loading';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/exhibitors' element={<Exhibitors />} ></Route>
        <Route path='visitors/facialRecognitionLoading' element={<Loading />} ></Route>
        <Route path='visitors/facialRecognitionFailed' element={<Loading />} ></Route>
        <Route path='/facialRecognitionFailed' element={<Loading />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
