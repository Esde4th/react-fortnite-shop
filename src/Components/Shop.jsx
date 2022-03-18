import React, { useContext } from 'react';
import './Shop.css';
import bgImage from './img/img-section-01.jpg';
import { ShopContent } from './ShopContent';
import { ShopContext } from '../context';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const { order, isBasketShow, alertName } = useContext(ShopContext);

    return (
        <>
            <Cart quantity={order.length} />
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
            <section id='section-01' className='full-section'>
                <div
                    className='fill color-screen gray'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                ></div>
                <div className='content'>
                    <div className='center content-01'>
                        <h1 className='center'>React Fortnite shop</h1>
                        <h3 className='center'>scroll down</h3>
                    </div>
                </div>
            </section>
            <section id='section-02'>
                <div className='content-2'>
                    <div className='content-02'>
                        <div className='row-02'>
                            <h1>daily shop</h1>
                        </div>
                        <div>
                            <ShopContent />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Shop };
