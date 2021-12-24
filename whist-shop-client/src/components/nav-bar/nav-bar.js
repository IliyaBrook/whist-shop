import React, {useEffect, useState} from 'react';
import './nav-bar.scss'
import {Container, DropdownButton, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import DropdownShoppingCartItem from "./dropdown-shopping-cart-item/dropdown-shopping-cart-item";
import {ShowToast} from "../toast/showToast";
import {useSelector} from "react-redux";


const NavBar = () => {
    const {  count } = useSelector(state => state.cartReducer)


    const history = useHistory()
    const [ path, setPath ] = useState(history.location)
    useEffect(() => {
        if (!localStorage.getItem('path')) {
            history.push('/home')
        }
        const unlisten = history.listen(h => {
            localStorage.setItem('path', h.pathname)
            setPath(h)
        })
        return () => unlisten
    }, [])
    return (
        <Navbar bg="dark" variant="dark">
            <ShowToast/>
            <Container>
                <Nav className="me-auto">
                    <div className="navLink-wrapper">
                        <Nav.Link
                            onClick={() => history.push('/home')}
                            className={path?.pathname === '/home' && 'navBar-selected'}
                        >Home</Nav.Link>
                        <Nav.Link
                            className={path?.pathname === '/statistics' && 'navBar-selected'}
                            onClick={() => history.push('/statistics')}
                        >Statistics</Nav.Link>
                        <Nav.Link
                            className={path?.pathname === '/admin' && 'navBar-selected'}
                            onClick={() => history.push('/admin')}
                        >Admin</Nav.Link>
                    </div>
                </Nav>
            </Container>
            <div className="shopping-cartButton-wrapper">
                <div className="cartButton-inner-wrapper">
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Shopping cart"
                    >
                        <DropdownShoppingCartItem/>
                    </DropdownButton>
                    <span>{count}</span>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;