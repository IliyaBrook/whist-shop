import React, {useState} from 'react';
import {Button, Col, Row, Toast} from "react-bootstrap";
import './showToast.scss'
import {useDispatch, useSelector} from "react-redux";
import {HIDE_TOAST} from "../../redux/reducers/toast/toastReducerTypes";

export const ShowToast = () => {
    const { show, message } = useSelector(state => state.toastReducer)
    const dispatch = useDispatch()
    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => dispatch({type:HIDE_TOAST})} show={show} delay={10000} autohide>
                    <Toast.Header>
                        <strong className="me-auto text-danger">Error!</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
};