import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice'; // Correct import path

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;
