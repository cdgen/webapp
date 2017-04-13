import React from 'react';
import Menu from './menu';

const Aside = (props) => (
  <aside>
    <div className="btn--mail" onClick={props.onClick} data-target="cta"><i className="icon-mail"></i><label>Call me</label></div>
    <div className="btn--menu" onClick={props.onClick} data-target="nav"><span></span><span></span><span></span><label>Menu</label></div>
    <Menu className="nav"/>
  </aside>
)

export default Aside
