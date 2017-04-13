import React from 'react';
const Footer = (props) => (
    <footer>    
      <div className="cx6 pad00 social-links">
        <h4>Social links</h4>
        <a href="https://github.com/cdgen" title="github" className="item hover"><i className="icon-github"></i><span data-hover="github"></span></a>
        <a href="https://facebook.com" title="facebook" className="item hover"><i className="icon-fb"></i><span data-hover="facebook"></span></a>
        <a href="https://pinterest.com/cdgen" title="pinterest" className="item hover"><i className="icon-pinterest"></i><span data-hover="pinterest"></span></a>
      </div>
      {props.children}
    </footer>
)
export default Footer
