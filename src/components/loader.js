import React from 'react';
import {Motion, spring} from 'react-motion';


const Loader = (props) => (
  
  
    <Motion style={
      {
        x: spring(props.isOpen ? 1 : 0),
        y: spring(props.isOpen ? 0 : 100)      
      }
    }>
      {({x,y}) =>
      <div id="loader" className={props.className}>
        <i className="icon-loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="#111">
            <g transform="matrix(1 0 0 -1 0 40)">
              <rect x="0" width="2"  height="05"><animate attributeName="height" begin="0s" dur="3.0s" values="20;45;56;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="4" width="2"  height="20"><animate attributeName="height" begin="0s" dur="2.5s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="8" width="2"  height="35"><animate attributeName="height" begin="0s" dur="3.5s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="12" width="2" height="30"><animate attributeName="height" begin="0s" dur="1.5s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="16" width="2" height="20"><animate attributeName="height" begin="0s" dur="2.5s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="20" width="2" height="30"><animate attributeName="height" begin="0s" dur="2.3s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
            </g>
          </svg>
        </i>   
        <span style={{ WebkitTransform: `scaleX(${x})` }} >loading</span>
       </div>
      }
     
    </Motion>
    
  
)

export default Loader;