import React from 'react';
import './home-page.scss'
import ShopItem from "../shop-item/shop-item";
import {useSelector} from "react-redux";


const HomePage = () => {
    const { products } = useSelector(state => state.productsReducer)
    console.log(products)
    const RenderProducts = () => {
        return products.map(product => {
            return <ShopItem
                key={product._id}
                img={product.imageUrl}
                title={product.title}
                description={product.description}
                price={`${product.price}$`}
            />
        })
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