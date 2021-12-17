import React from 'react';
import {Button, Dropdown} from "react-bootstrap";
import './dropdown-shopping-cart-item.scss'

const DropdownShoppingCartItem = () => {
    return (
        <Dropdown.Item disabled={true}>
            <div className="dropDown-cart-wrapper">
                <div className="cart-elem-modal">
                    <div>
                        <span>elem 1</span>
                        <span>10$</span>
                    </div>
                    <div>
                        <span>elem 2</span>
                        <span>50$</span>
                    </div>
                    <div>
                        <span>elem 3</span>
                        <span>70$</span>
                    </div>
                </div>
                <div className="total">
                                    <span>
                                        Total:
                                    </span>
                    <span>
                                        300$
                                    </span>
                </div>
                <div className="pay-button-wrapper">
                    <Button className="pay-button">Pay</Button>
                </div>

            </div>
        </Dropdown.Item>
    );
};

export default DropdownShoppingCartItem;