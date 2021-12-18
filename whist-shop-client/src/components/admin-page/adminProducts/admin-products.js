import React from 'react';
import './admin-products.scss'
import ProductItem from "./product-item/product-item";
import {useSelector} from "react-redux";

const AdminProducts = () => {
    const { products } = useSelector(state => state.productsReducer)

    const RenderProducts = () => products.map(
        product => <ProductItem key={product._id} props={{
            title:product.title,
            price:product.price,
            id:product._id
        }}/>)

    return (
            <table className="adminProducts">
                <tbody>
                <tr className="topTr">
                    <td>Title</td>
                    <td>Price</td>
                    <td>Options</td>
                </tr>
                <RenderProducts/>
                </tbody>
            </table>
    );
};

export default AdminProducts;