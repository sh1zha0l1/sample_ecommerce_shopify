import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <NavMenu/>
        <Cart/>
        <Routes>
          <Route path="/products/:handle" element={<ProductPage/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
