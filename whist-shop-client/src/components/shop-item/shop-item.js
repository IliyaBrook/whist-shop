import React from 'react';
import './shop-item.scss';
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {REQUEST_ADD_CART_PRODUCT} from "../../redux/reducers/cartReducer/cartReducerTypes";


const ShopItem = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="item">
                <div className="header-image">
                    <img src={props?.imageUrl} alt="productImage" onError={
                        (e) => e.target = null
                    }/>
                </div>
                <div className="item-content">
                    <ul>
                        <li>
                            <span>Title:</span>
                            <p>{props?.title}</p>
                        </li>
                        <li>
                            <span>Description:</span>
                            <p>{props?.description}</p>
                        </li>
                        <li>
                            <span>Price:</span>
                            <span>{props?.price}</span>
                        </li>
                    </ul>
                </div>
                <div className="buy-btn-wrapper">
                    <Button onClick={() => dispatch({type:REQUEST_ADD_CART_PRODUCT, payload: props})}>
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;