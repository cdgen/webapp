import React from 'react';
import Link from 'react-router/lib/Link';
import logo from '../logo.svg'

const Header = (props) => (
    <header>
      <Link to="/" activeClassName="active" className="brand"><img src={logo} alt="logo" /></Link>
      <div className="phone"><i className="icon-phone"></i><span>+7 (905) 864 01 15</span></div>
      <div className="skype"><i className="icon-skype"></i><span>cdgen@gmail.com</span></div>
    </header>
)

export default Header