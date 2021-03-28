import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce( (total, item) => total + item.price , 0);
    // for (let i = 0; i < cart.length; i++) {
    //     const item = cart[i];
    //     total += item.price;
    // }
    return (
        <div>
            <div className="text-center">
                <h3>Order Summery</h3>
                <p>Items Ordered: {cart.length}</p>
            </div>
            <div className="billSection">
                <div className="bill text-left">
                    <p>Items:</p>
                    <p>Shipping & Handling:</p>
                    <p>Total before tax:</p>
                    <p>Estimated tax:</p>
                    <h2 className="text-danger">Order Total:</h2>
                </div>
                <div className="price text-right">
                    <p>${cart}</p>
                    <p>${cart}</p>
                    <p>${cart}</p>
                    <p>${cart}</p>
                    <h2>${total}</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;