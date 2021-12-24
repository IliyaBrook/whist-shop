import React from 'react';
import {Button, Dropdown} from "react-bootstrap";
import './dropdown-shopping-cart-item.scss'
import {useDispatch, useSelector} from "react-redux";
import {REQUEST_PAY} from "../../../redux/reducers/cartReducer/cartReducerTypes";

const DropdownShoppingCartItem = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.cartReducer)
    let price = 0
    products.forEach(p => price += p.price)

    const RenderCartItems = () => products.map((product, index) => {
        return (
            <div className="dropdownItemWrapper" key={index}>
                <span>{product.title}</span>
                <span>{`${product.price}$`}</span>
            </div>
        )
    })
    return (
        <>

            <div className="dropdownItemContentWrapper">
                <Dropdown.Item disabled={true}>
                    <RenderCartItems/>
                    <div className="dropdonwTotalWrapper">
                                    <span>
                                        Total:
                                    </span>
                        <span>
                                        {`${price}$`}
                                    </span>
                    </div>
                </Dropdown.Item>
            </div>

            <div className="pay-button-wrapper">
                <Dropdown.Item>
                    <Button
                        className="pay-button"
                        onClick={() =>
                            dispatch({type:REQUEST_PAY})}
                    >Pay</Button>
                </Dropdown.Item>
            </div>
        </>
    );
};

export default DropdownShoppingCartItem;