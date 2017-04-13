import React from 'react'
import classNames from 'classnames/bind'

class ProjectCategory extends React.Component {
    constructor(props) {
        super(props)
  /* 
    Биндим this в функцию setActive, чтобы передать индекс компонента (this.props.Index), вызвывшего функцию в другой компонент
      CODE:  
      setActive() { 
        this.props.handleClick(this.props.Index) 
      }
  */
        this.setActive = this.setActive.bind(this)

        this.state = {
          projects: []
        }
    }
    
    componentWillMount() {
      this.getProjects();
    }
  /* 
    Биндим this в функцию setActive, чтобы передать индекс компонента (this.props.Index), вызвывшего функцию в другой компонент
      CODE:  
      setActive() { 
        this.props.handleClick(this.props.Index) 
      }
  */
    getProjects() {
      let _this = this
      let catid = this.props.cat.id
      let url = 'scene.json'
      fetch(url).then( response => response.json() )
      .then( json => { _this.setState({ projects: json }) })
    }

    setActive() {
      this.props.handleClick(this.props.Index)
    }
    
    getBackground(i) {
      let _this = this
      let bg = this.props.cat.img
      return bg
    }

    getBgColor(i) {
      let _this = this
      let bgColor = this.props.cat.bgColor
      return bgColor
    }
    
    getWidth(isActive) {
        let w = 'calc(25vw - 20px)'
        if (isActive) { w = '500px' }
        return w
    }
    render() {
      // console.log(this.state.projects)
        let title = this.props.cat.title
        let img = this.getBackground()
        
        let { active, focused, shiftLeft, isLast } = this.props

        let styles = {
          container: {
            transform: (function() {
                return (active)
                    ? 'scale(1.1) translate3d(0, 0, 0)'
                    : 'scale(1) translate3d(0, 0, 0)'
            })()
          }, item: {
              transform: (function() {
                  let direction = (shiftLeft) ? '-': ''
                  let transform = 'translate3d(0, 0, 0)'
                  if (focused) {
                    if (!active) {
                      transform = 'translate3d('+ direction +'100%, 0, 0)'
                    }
                  }
                  return transform
              })()
          }, background: {
              background: 'url(' + img + ') no-repeat center center',
              backgroundSize: 'cover',
              height: '500px',
              width: (this.getWidth(active))
          }
        }
        let classes = classNames({category: true, isActive: active, isLast, shiftLeft})
        let bgColor = this.getBgColor()
        return (
            <li className={classes} style={styles.item}>
                <div className="category--content">
                    <h2>{title}</h2>                  
                </div>
                <div className={bgColor +" category--image-container"} onClick={this.setActive} style={styles.container}>
                    <div className="category--image" style={styles.background}></div>
                </div>
                <div className="title">
                  <h6>{title}</h6>
                </div>
                <div className="category--closeButton">
                  <a href="#">Back</a>
                </div>
            </li>
        )
    }
}
// КОРНЕВОЙ КОМПОНЕНТ
// Получает
class Scene extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this)
        this.categoryNode = this.categoryNode.bind(this)
        this._focusOff = this._focusOff.bind(this)
        this.state = {
          open: false,
          activeIndex: null,
          items: []
        }
    }
    componentDidMount() {
      this._getCategories();
    }
    _getCategories() {
      let _this = this
      let url = 'scene.json';
      fetch(url).then( response => response.json() )
      .then( json => { _this.setState({ items: json }) })
    }

    _handleClick(i){
      this.setState({
        activeIndex: i,
        open: true
      })
    }
    _focusOff(e){
      e.preventDefault()
      if (e.target.className !== 'category--image') {
        this.setState({
          activeIndex: null,
          open: false
        })
      }
    }
    
    categoryNode(cat, i){
        let isLast = ( i === this.state.items.length - 1 || i === this.state.items.length - 2)
        let shiftLeft = ( i < this.state.activeIndex )

        return (
          <ProjectCategory
            cat={cat}
            key={'cat-' + i}
            handleClick={this._handleClick}
            active={i === this.state.activeIndex}
            focusOff={this._focusOff}
            focused={this.state.open}
            shiftLeft={shiftLeft}
            Index={i}
            isLast={isLast}
          />
        )
    }
    render() {
      let catNodes = this.state.items.map(this.categoryNode)
      let classes = classNames({
        focused: this.state.open
      })
      return (
        <div className={'items--menu-container ' + classes} onClick={this._focusOff} style={{height: window.innerHeight}}>
          <ul className="items menu">
            {catNodes}
          </ul>
        </div>
      )
    }
}


export default Scene;