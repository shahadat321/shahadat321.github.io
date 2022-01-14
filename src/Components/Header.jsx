import React, { Component } from 'react';
import Navbar from './Nav';


class Header extends Component {
    render() {
        return (
            <header className="header app--header">
                <Navbar />
            </header>
        )
    }
}

export default Header;
