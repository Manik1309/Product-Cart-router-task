import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleChange =(product, d)=>{
    let ind = -1;
    cart.forEach((data, index) => {
        if(data.id === product.id)
            ind=index
        
    });
    const temArr =cart;
    temArr[ind].total += d;
    if(temArr[ind].total ===0)
        temArr[ind].total= 1;
    setCart([...temArr])
  }
  return (
    <>
   <BrowserRouter>
   <Header cart ={cart} />
   <div className='container'>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />}/>
      <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}/>
    </Routes>
     </div>
   </BrowserRouter>
    </>
  );
};

export default App;