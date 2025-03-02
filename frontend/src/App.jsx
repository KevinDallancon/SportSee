import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Page404 from '../pages/page404/Page404.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/user/:id" element={<Home />} />
      <Route path='*' element={<Page404 />} />
      <Route path='/error' element={<Page404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App