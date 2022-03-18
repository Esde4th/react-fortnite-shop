import React, { useContext } from 'react';
import { ShopContext } from '../context';
import { BasketItem } from './BasketItem';
import './BasketList.css';

function BasketList() {
    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <span className='basket-close' onClick={handleBasketShow}>
                x
            </span>
            <li className='collection-item active'>CART</li>
            {order.length ? (
                order.map((item) => {
                    return <BasketItem key={item.id} {...item} />;
                })
            ) : (
                <li className='collection-item'>No items here</li>
            )}

            <li className='collection-item active flex-right'>
                TOTAL COST: ${totalPrice}
            </li>
            <li className='collection-item flex-right'>
                <button className='btn'>buy</button>
            </li>
        </ul>
    );
}

export { BasketList };
