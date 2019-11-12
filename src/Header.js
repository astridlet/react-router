import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    render(){
        return (
    <ul className="header"  id="render">
        <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/our-history">History</NavLink></li>
    </ul>
          
        )
    }

}

export default Header;