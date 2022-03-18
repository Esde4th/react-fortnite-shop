import React, { useContext } from 'react';
import { ShopContext } from '../context';
import './BasketItem.css';

function BasketItem(props) {
    const { id, name, price, quantity } = props;

    const { removeFromCart, incQuantity, decQuantity } =
        useContext(ShopContext);

    return (
        <li className='collection-item'>
            {name}{' '}
            <button className='basket-quantity' onClick={() => decQuantity(id)}>
                -
            </button>{' '}
            x{quantity}{' '}
            <button className='basket-quantity' onClick={() => incQuantity(id)}>
                +
            </button>{' '}
            = ${price * quantity}
            <button className='secondary-content'>
                <span
                    className='basket-item-delete'
                    onClick={() => removeFromCart(id)}
                >
                    x
                </span>
            </button>
        </li>
    );
}

export { BasketItem };
