import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import Pro1 from './product/Pro1';
import Pro2 from './product/Pro2';
import Pro3 from './product/Pro3';
import Pro5 from './product/Pro5';
import Pro6 from './product/Pro6';
import Pro7 from './product/Pro7';
import Cart from './redux/Cart';
import Foot from './footer/Foot';
import Fav from './redux/Fav'
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {




  return (
    <div>
      {/* <Nav/> */}
      {/* <Pro1/> */}
      {/* <Pro2/>  */}
      {/* <Pro3/> */}
      {/* <Pro5/> */}
      {/* <Pro6/> */}
      {/* <Pro7/> */}
      {/* <Home/>
       <Foot/> */}
      

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product1" element={<Pro1/>}/>
        <Route path="/product2" element={<Pro2/>}/>
         <Route path="/product3" element={<Pro3/>}/>
          <Route path="/product5" element={<Pro5/>}/>
           <Route path="/product6" element={<Pro6/>}/>
            <Route path="/product7" element={<Pro7/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/fav" element={<fav/>}/>
      </Routes>
      <Foot/>
      </BrowserRouter>


    </div>
  );
}

export default App;
