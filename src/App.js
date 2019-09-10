import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import MyPage from './pages/MyPage';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/me' component={MyPage} />
  </BrowserRouter>
);

export default App;
