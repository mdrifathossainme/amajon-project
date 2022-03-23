import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import'./Shop.css'

const Shop = () => {
    const [products,serproduct]=useState([])
    const [cart,setCount]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>serproduct(data))
    },[])
   
    const addTocart=(product)=>{
        const newCart=[...cart, product]
        setCount(newCart)
    
    }
    return (
        <div className='shop-item'>
            <div className="product">
               {
                   products.map(product=><SingleProduct product={product} key={product.id} addTocart={addTocart}></SingleProduct>)
               }
            </div>
            <div className="Sidebar">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;