import React, {useCallback, useEffect, useState} from 'react';
import './home-page.scss'
import ShopItem from "../shop-item/shop-item";
import {useSelector} from "react-redux";


const HomePage = () => {
    const { products } = useSelector(state => state.productsReducer)

    const RenderProducts = () => {
        return products.map(useCallback((product, idx) => {
            if (products.length !== 0) {
                return <div key={idx}>
                    <ShopItem
                        imageUrl={product.imageUrl}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        productId={product.productId}
                        id={product._id}
                    />
                </div>
            }
        },[products]))
    }
    return (
        <div className="home-page">
            <div className="container-home">
                <RenderProducts/>
            </div>
        </div>
    );
};

export default HomePage;