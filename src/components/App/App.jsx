import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { lazy } from 'react';
import Layout from '../Layout/Layout';

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
