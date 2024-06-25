import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Header from './Header';
import Productpage from './Productpage';
import Details from './Details';
import About from './About';
import Cart from './component/Cart';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"exact element={<Home/>}/>
      <Route path="/Product" element={<Productpage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
