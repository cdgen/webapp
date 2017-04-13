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
        <i className="icon-loading" style={{ WebkitTransform: `translate3d(${y}%, 0, 0)`, opacity: `${x}`, transitionDelay: `1s` }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="36" viewBox="0 0 55 80" fill="#111">
            <g transform="matrix(1 0 0 -1 0 80)">
              <rect x="0" width="5" height="45.1515" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;56;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="10" width="5" height="65.828" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="20" width="5" height="65.828" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="30" width="5" height="54.5372" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="40" width="5" height="59.1447" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"/></rect>
              <rect x="50" width="5" height="65.828" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"/></rect>
            </g>
          </svg>
        </i>   
        <span style={{ WebkitTransform: `scaleX(${x})` }} >loading</span>
       </div>
      }
     
    </Motion>
    
  
)

export default Loader;