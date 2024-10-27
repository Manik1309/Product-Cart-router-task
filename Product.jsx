import React from 'react';
import "./Product.css";

const Product = ({product, cart, setCart}) => {

    const title = product.title.length>25 ? product.title.substring(0,20)+"..":product.title;
    const addCart =()=>{
        setCart([...cart, product]);

    };
    const removeCart =()=>{
        setCart(cart.filter((c)=>c.id !== product.id));

    };

    return (
        <div className='product'>
            <div className='img'>
              <img src={product.image} alt=''/> 
            </div>
            <div className="details">
            <h5>{title}</h5>
            <p>Price : {product.price}</p>
          {cart.includes(product) ?<button className='btnRemove' onClick={removeCart}>Remove Cart </button> : <button onClick={addCart}>Add to Cart</button>}
            </div>
           
        </div>
    );
};

export default Product;