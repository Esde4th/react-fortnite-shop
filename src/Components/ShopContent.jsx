import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from './config';
import { ShopContext } from '../context';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

function ShopContent() {
    const { loading, setGoods } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.featured && setGoods(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return <div>{loading ? <Preloader /> : <GoodsList />}</div>;
}

export { ShopContent };
