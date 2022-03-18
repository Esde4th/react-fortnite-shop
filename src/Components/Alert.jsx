import React from 'react';
import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import './Alert.css';

function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return <div className='toast'>{name} added to cart</div>;
}

export { Alert };
