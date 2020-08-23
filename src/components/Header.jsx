import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header className="app__header">
                <NavLink to='/index' activeStyle={{color: "#fb8c00"}}>Home</NavLink>
                <NavLink to='/orders' activeStyle={{color: "#fb8c00"}}>Orders</NavLink>
                <NavLink to='/shopping' activeStyle={{color: "#fb8c00"}}>Shopping</NavLink>
            </header>
        );
    }
}

export default Header;
