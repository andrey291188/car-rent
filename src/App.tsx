
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './component/Loyaout';
import { lazy } from 'react';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));

function App() {
 

  return  (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='favorites' element={<Favorite />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}

export default App;
