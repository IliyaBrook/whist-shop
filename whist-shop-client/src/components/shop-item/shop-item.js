import React from 'react';
import './shop-item.scss';
import {Button} from "react-bootstrap";


const ShopItem = ({title, description, price, img }) => {
    return (
        <div>
            <div className="item">
                <div className="header-image">
                    <img src={img} alt="productImage"/>
                </div>
                <div className="item-content">
                    <ul>
                        <li>
                            <span>Title:</span>
                            <p>{title}</p>
                        </li>
                        <li>
                            <span>Description:</span>
                            <p>{description}</p>
                        </li>
                        <li>
                            <span>Price:</span>
                            <span>{price}</span>
                        </li>
                    </ul>
                </div>
                <div className="buy-btn-wrapper">
                    <Button>
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;