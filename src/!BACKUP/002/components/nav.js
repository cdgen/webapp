import React from 'react';
import Menu from './menu';

const Nav = (props) => (
  <nav role="navigation" className={props.className}>
    <div className="side-left info">
      <div className="btn--close"><span></span><label>Close</label></div>
      <h3><span>main</span><span>menu</span><div className="line"></div></h3>
    </div>
    <Menu className="side-right nav"/>
  </nav>
)
export default Nav