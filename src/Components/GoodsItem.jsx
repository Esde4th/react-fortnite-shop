import React from 'react';
import { useEffect, useState, useContext, useRef, useMemo } from 'react';
import { ShopContext } from '../context';
import './GoodsItem.css';

function GoodsItem(props) {
    const targetRef = useRef(null);
    const { id, name, description, price, full_background } = props;

    const { addToCart, removeFromCart, order } = useContext(ShopContext);

    const [isBuyActive, setBuyActive] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const onEntry = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    };

    const options = useMemo(() => {
        return {
            threshold: [0.1],
        };
    }, []);

    const addOrRemoveFromCart = () => {
        if (!isBuyActive) {
            addToCart({ id, name, price });
            setBuyActive(true);
        } else {
            removeFromCart(id);
            setBuyActive(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onEntry, options);
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (isBuyActive) {
            const itemIndex = order.findIndex(
                (orderItem) => orderItem.id === id
            );
            if (itemIndex < 0) {
                setBuyActive(false);
            }
        }
        // eslint-disable-next-line
    }, [order]);

    return (
        <div className={'card' + (isVisible ? ' _active' : '')} ref={targetRef}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => {
                        addOrRemoveFromCart();
                    }}
                >
                    {isBuyActive ? 'in cart' : 'buy'}
                </button>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    ${price}
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
