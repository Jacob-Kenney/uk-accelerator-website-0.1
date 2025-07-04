import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Rules from './components/Rules';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
}

export default App;