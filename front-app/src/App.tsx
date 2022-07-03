import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Card from './components/card/card';
import Exhibitors from './pages/exhibitors/exhibitors';
import Exhibitos from './pages/exhibitors/exhibitors';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/exhibitors' element={<Exhibitors />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
