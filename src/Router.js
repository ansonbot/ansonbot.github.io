import { Routes, Route } from 'react-router-dom';
import Example from './Example';
import Main from './Main';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/example' element={<Example />} />
    </Routes>
  );
}

export default Router;