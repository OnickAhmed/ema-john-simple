import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.splice(0,5);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-Container">
            <div className="product-Container">
                {products.map(product => <Product addToCart = {addToCart} product={product}></Product>)}
            </div>
            <div className="cart-Container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;