import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Exhibitors from './pages/exhibitors/exhibitors';
import Loading from './pages/exhibitors/loading';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/exhibitors' element={<Exhibitors />} ></Route>
        <Route path='/facialRecognitionLoading' element={<Loading />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
