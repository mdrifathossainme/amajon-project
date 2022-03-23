import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import'./SingleProduct.css'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


const SingleProduct = (props) => {
    // console.log(props)
    const {img,name,price,seller,ratings}=props.product
    return (
        <div className='cardBody'>
            <img src={img} alt="" />
            <h3 className='name'>{name.slice(0,20)}</h3>
            <p className='price'>Price: ${price}</p>
            <p className='manu'>Manufacturer: {seller}</p>
            <p className='rating'>Rating: {ratings} Start</p>
            <button onClick={()=>props.addTocart(props.product)} className='btn'>Add to Cart 
            <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SingleProduct;