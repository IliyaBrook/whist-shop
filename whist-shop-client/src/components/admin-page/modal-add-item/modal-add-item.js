import React, {useState} from 'react';
import './modal-add-item.scss'
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {REQUEST_ADD_PRODUCT} from "../../../redux/reducers/productsReducer/productsReducerTypes";

const ModalAddItem = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [formValue, setFormValue] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = (event) => {
        event.preventDefault()
        dispatch({type:REQUEST_ADD_PRODUCT, payload: formValue})
    }

    const onChange = (event) => {
        setFormValue(prevState => ({
            ...prevState,[event.target.name]:event.target.value.trim()}
        ))
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add item
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={onSubmit}>
                    <Modal.Body>
                        <Modal.Header>
                            Add a new product
                        </Modal.Header>
                        <div className="modal-add-item-content">

                            <Form.Group as={Row}
                                        className="mb-3"
                                        controlId="imageUrl"
                            >
                                <Form.Label column sm="2">
                                    <span className="text-nowrap my-4">Image url:</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        name="imageUrl"
                                        onChange={onChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="title">
                                <Form.Label column sm="2">
                                    <span className="text-nowrap my-4">Title:</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        onChange={onChange}
                                        name="title"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="price">
                                <Form.Label column sm="2">
                                    <span className="text-nowrap my-4">Price:</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        onChange={onChange}
                                        name="price"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="descriptions">
                                <Form.Label>Descriptions</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={onChange}
                                    name="description"
                                />
                            </Form.Group>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleClose}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default ModalAddItem;