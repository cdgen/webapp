import React from 'react';
import Menu from './menu';

const Nav = (props) => (
  <nav role="navigation" className={props.className}>
    <div className="side-left info">
      <h3><span>Main</span><span>menu</span></h3>
      <div className="line"></div>
      <div className="btn--close"><span></span><label>Close</label></div>
    </div>
    <Menu className="side-right nav"/>
  </nav>
)

export default Nav