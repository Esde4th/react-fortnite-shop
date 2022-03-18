import React, { useContext } from 'react';
import { ShopContext } from '../context';
import cartIcon from './img/—Pngtree—shopping cart icon_5060874.png';
import './Cart.css';

function Cart() {
    const { order, handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const quantity = order.length;

    return (
        <div className='cart' onClick={handleBasketShow}>
            <img src={cartIcon} alt='shopping cart icon' />
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
