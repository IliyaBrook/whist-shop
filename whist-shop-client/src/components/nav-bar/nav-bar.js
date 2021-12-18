import React, {useEffect, useState} from 'react';
import './nav-bar.scss'
import {Container, DropdownButton, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import DropdownShoppingCartItem from "./dropdown-shopping-cart-item/dropdown-shopping-cart-item";


const NavBar = () => {
    const history = useHistory()
    const [ path, setPath ] = useState()
    useEffect(() => {
        const unlisten = history.listen(h => setPath(h))
        return () => unlisten
    }, [])
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <div className="navLink-wrapper">
                        <Nav.Link
                            onClick={() => history.push('/home')}
                            className={path.pathname === '/home' && 'navBar-selected'}
                        >Home</Nav.Link>
                        <Nav.Link
                            className={path.pathname === '/statistics' && 'navBar-selected'}
                            onClick={() => history.push('/statistics')}
                        >Statistics</Nav.Link>
                        <Nav.Link
                            className={path.pathname === '/admin' && 'navBar-selected'}
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
                    <span>10</span>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;