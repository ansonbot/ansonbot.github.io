import { Routes, Route } from 'react-router-dom';
import Example from './Example';
import Main from './Main';
import Geovis from './Geovis';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/example' element={<Example />} />
      <Route path='/geovis' element={<Geovis />} />
    </Routes>
  );
}

export default Router;