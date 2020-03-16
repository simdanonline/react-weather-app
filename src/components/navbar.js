import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AboutPage from '../pages/about'
import ContactPage from '../pages/contact';
import Home from '../pages/home';

const Navbarjs = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (


        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>


                </Nav>
                <a href='https://github.com/simdanonline' target='blank' > <NavbarText>Github</NavbarText></a>

            </Collapse>
        </Navbar>






    );
}

export default Navbarjs;