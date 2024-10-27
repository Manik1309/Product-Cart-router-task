import React, { useEffect, useState } from 'react';
import './Cart.css';
const Cart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc, cur) => acc + parseFloat(cur.price),0,2));
    },[cart]);

    const handleRemove =(id)=>{
        const arr = cart.filter((product)=>product.id !== id);
        setCart(arr);

    }

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
            <h1 className="cart-heading">Cart Products</h1>
            <div className="cart-container">
                {
                    cart.map((product) => (
                        <div className="cart-product" key={product.map}>
                            <div className="img">
                                <img src={product.image} alt="image"/>
                            </div>
                            <div className="cart-product-details">
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                            <div className='size' >
                                <button onClick={()=>handleChange(product.id, +1)}>+</button>
                                <button onClick={()=>handleChange(product.id, -1)}>-</button>
                            </div>
                            <div className='remove' > 
                               
                                <button onClick={()=>handleRemove(product.id)} >Remove</button>
                            </div>

                        </div>

                    ))
                }

            </div>
            <h2 className="cart-amt">  Total Amount Rs: {total} </h2>
        </>
    );
};

export default Cart;