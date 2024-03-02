
import './App.css';
import {BrowserRouter, Link,Route, Routes} from "react-router-dom"

import Menu from './pages/menu';
import Order from './pages/order';
import Home from './pages/home';
import Nopage from './pages/nopage';
import Reservation from './pages/reservations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        
        <Route path ="/contact" element={<Order/>}/>
        <Route path ="/menu" element={<Menu/>}/>
        <Route path ="/reservation" element={<Reservation/>}/>
        <Route path ="*" element={<Nopage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
