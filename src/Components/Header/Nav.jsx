import React, { Component, useState } from 'react';



class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            openNav: false
        }
        this.navClick = this.navClick.bind(this);
    }
    navClick(){
        this.setState({
            openNav:!this.state.openNav
        })
    }
    render(){
        return(
            <nav className="app--nav">
                <div className="logo"><a href=''><img src="./images/logo.svg" alt=""/></a></div>
               
                    <div className={`menu-overlay ${this.state.openNav?'show':''}`}>
                        <ul className="menu--list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </div>
                    
                <div className="burger">
                    <button className={`hamburger ${this.state.openNav?'test':''}`} onClick={this.navClick}>
                        <span className="line"></span> 
                        <span className="menu">Menu</span>
                    </button>
                </div>
                {/* <div className={`overlay-popup ${this.state.openNav?'show':''}`}>wfsfsdf</div> */}
            </nav>
        )
    }
}


export default Navbar;
