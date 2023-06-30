import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';


function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='main' element={<Main/>}/>
    </Routes>
    </Router>
  );
}

export default App;
