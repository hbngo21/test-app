import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/detail-page/detail-page';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/alert" element={<DetailPage/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
