import React from 'react';
import Link from 'react-router/lib/Link';

// NavLink
const NavLink = (props) => (
  <Link to={props.to} activeClassName="active" className={props.className} title={props.title} onlyActiveOnIndex={props.onlyActiveOnIndex}>
    <i className={props.icon}></i>
    <span className="link-title" data-hover={props.title}></span>
    <span className="link-num">{props.num}</span>
  </Link>
)

const Menu = (props) => (
  <div className={props.className}>
    <NavLink className="link hover" to="/"        title="Home"    num="01" icon="icon-home" onlyActiveOnIndex={true}/>
    <NavLink className="link hover" to="/about"   title="about"   num="02" icon="icon-information"/>
    <NavLink className="link hover" to="/works"   title="works"   num="03" icon="icon-contact"/>
    <NavLink className="link hover" to="/services"  title="services"  num="04" icon="icon-settings"/>
  </div>
)

export default Menu