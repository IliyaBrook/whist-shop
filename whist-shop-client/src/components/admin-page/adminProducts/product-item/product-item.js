import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import './product-item.scss'
import {InputTitle, InputPrice } from './inputs'
import {useDispatch} from "react-redux";
import {
    REQUEST_EDIT_PRODUCT,
    REQUEST_REMOVE_PRODUCT
} from "../../../../redux/reducers/productsReducer/productsReducerTypes";

const ProductItem = ({props}) => {
    const dispatch = useDispatch()

    const { title,price,id } = props
    const [editButtonState, setEditButtonState ] = useState(false)
    const [productValues, setProductValues ] = useState({
        title:'',
        price:'',
        id:''
    })

    const handleEditProduct = () => {
        setEditButtonState(true)
    }
    const submitHandler = () => {
        setProductValues(prevState => ({
            ...prevState,price: productValues.price,
            title: productValues.title, id
        }))
        dispatch({type:REQUEST_EDIT_PRODUCT, payload: {...productValues, id, index: props.index}})
        setEditButtonState(false)
    }
    const handleSubmitProduct = () => {
        submitHandler()
    }
    const handleSubmitOnEnterPress = (keyDownEvent) => {
        if (keyDownEvent.key === 'Enter') {
            submitHandler()
        }
    }

    const handleInputs = (event) => {
        setProductValues(prevState => ({
            ...prevState,
            [event.target.name]:event.target.value
        }))
    }

    const handleRemoveProduct = () => {
        dispatch({type:REQUEST_REMOVE_PRODUCT, payload: id })
    }

    return (
            <tr className="adminProductItem">
                <td>
                    <InputTitle
                        onKeyDown={handleSubmitOnEnterPress}
                        value={productValues.title}
                        onChange={handleInputs}
                        className={
                            editButtonState ? 'itemProductActive': 'itemProductDisabled'
                        }
                        type="text"
                        placeholder={title}
                        disabled={!editButtonState}
                        name="title"
                    />
                </td>
                <td>
                    <InputPrice
                        onKeyDown={handleSubmitOnEnterPress}
                        value={productValues.price}
                        onChange={handleInputs}
                        className={
                            editButtonState ? 'itemProductActive': 'itemProductDisabled'
                        }
                        type="text"
                        placeholder={`${price}$`}
                        disabled={!editButtonState}
                        name="price"
                    />
                </td>
                <td>
                    <div className="adminProductsBtnsWrapper">
                        {
                            !editButtonState ?
                                <Button
                                    onClick={handleEditProduct}
                                    variant="primary"
                                >Edit</Button>
                                :
                                <Button
                                    onClick={handleSubmitProduct}
                                    variant="success"
                                >Submit</Button>
                        }

                        <Button variant="danger" onClick={handleRemoveProduct}>
                            Delete
                        </Button>
                    </div>
                </td>
            </tr>
    );
};

export default ProductItem;