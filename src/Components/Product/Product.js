import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'react-bootstrap';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock, star} = props.product;
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="content">
                <h4 className="product-name">{name}</h4>
                <p>by {seller}</p>
                <h2>${price}</h2>
                <p>Only {stock} left in stock - order soon</p>
                <p>{star}</p>
                <Button variant="warning" className="m-3" onClick={ () => props.addToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</Button>{' '}
            </div>
        </div>
    );
};

export default Product;