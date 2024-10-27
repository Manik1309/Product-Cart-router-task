import React,{ useEffect, useState }  from 'react';
import axios from 'axios';
import Product from './Product';
import "./Home.css";

const Home = ({ cart, setCart}) => {
        const [products, setUser] = useState([]);
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
    
        useEffect(() => {
            fetchData();
        }, [])
    
        const fetchData = async () => {
            try {
                 
                const response = await axios.get("https://fakestoreapi.com/products")
                setUser(response.data)
                setLoading(false)

                 
            } catch (error) {
                console.log(error);
                setError(error)
            }
        }
    
        if (loading) {
            return <div>Loading......</div>
        }
    
        if (error) {
            return <div>Error:{error}</div>
        }
        

        return (
            <div className='product-container'>
                {products.map((product)=>(
                    <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
                ))

                }
               
            </div>
        );
    
};

export default Home;