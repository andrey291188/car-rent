import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './component/Loyaout';
import Homepage from './pages/Homepage/Homepage';
import Catalog from './pages/Catalog/Catalog';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='favorites' element={<Favorite />} />

      </Route>
    </Routes>
  );
}

export default App;
