import React from 'react';
import Link from 'react-router/lib/Link';

// NavLink
const NavLink = (props) => (
  <Link to={props.to} activeClassName="active" className={props.className +" "+ props.icon} title={props.title} data-num={props.num} onlyActiveOnIndex={props.onlyActiveOnIndex}>
    <span className="link-title" data-hover={props.title}></span>
  </Link>
)

const Menu = (props) => (
  <div className={props.className}>
    <NavLink className="hover" to="/"          title="Home"      num="01" icon="icon-home" onlyActiveOnIndex={true} />
    <NavLink className="hover" to="/about"     title="about"     num="02" icon="icon-information" />
    <NavLink className="hover" to="/works"     title="works"     num="03" icon="icon-contact" />
    <NavLink className="hover" to="/services"  title="services"  num="04" icon="icon-settings" />
  </div>
)

export default Menu