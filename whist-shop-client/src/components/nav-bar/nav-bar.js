import React from 'react';
import './nav-bar.scss'
import {
    Container, DropdownButton, Nav, Navbar
} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import DropdownShoppingCartItem from "./dropdown-shopping-cart-item/dropdown-shopping-cart-item";


const NavBar = () => {
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <div className="navLink-wrapper">
                        <Nav.Link onClick={() => history.push('/home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => history.push('/statistics')}>Statistics</Nav.Link>
                        <Nav.Link onClick={() => history.push('/admin')}>Admin</Nav.Link>
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
                    <span>10</span>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;