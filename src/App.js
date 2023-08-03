import './styles/app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
