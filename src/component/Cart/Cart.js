import React from 'react';
import'./Cart.css'

const Cart = ({cart}) => {
console.log(cart)
    let total=0;
    let shipping=0;
    let tex=0;
    for(const product of cart){
        total=product.price+total;
        shipping =product.shipping+shipping;
        
    }
    tex=(total*.075).toFixed(2);
    let allPrice=0;
    allPrice=(+tex+total+shipping).toFixed(2)
    return (
        <div className='cartStyle'>
            <h3>Order Summary</h3>
               <p>Selected Items:{cart.length}</p>
               <p>Total Price: ${total}</p>
               <p>Total Shipping Charge: ${shipping}</p>
               <p>Tax: ${tex}</p>
               <h5>Grand Total: ${   allPrice}</h5>
        </div>
    );
};

export default Cart;