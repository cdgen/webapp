import React from 'react';
import PageLayout from '../page-layout';
import Title from "../helpers"

const homeData = {
"head": {
    "title": "Creative design_generator",
    "subTitle": "Креативные идеи в прогрессивном исполнении",
    "id": "0",
    "num": "01", 
    "cat": "intro",
    "url": "home"
  },
"sections": [
  {
    "key": 0,
    "num": "1",
    "cat": "Intro",
    "title": "Hello_World", 
    "subTitle": "Креативные идеи в прогрессивном исполнении", 
    "img": "/img/intro-bg_1.jpg",
    "itemClass": "slide-item",
    "titleClass": "cx4 hx6",
    "contentClass": "cx8 hx6 item",
    "iconClass": "icon-html5",
    "bgClass": "item-bg",
    "items": [
      {
        "id": "01",
        "cat": "Design",
        "title": "Графический_дизайн",
        "subTitle": "HTML5 / HTML, CSS",
        "value": "90",
        "itemClass": "skills-item cx3",
        "iconClass":"icon-html5",
        "bgClass":"bMain"
      },
      {
        "id":"02",
        "cat":"philosophy",
        "title":"JavaScript",
        "subTitle":"VanillaJS, ReactJS, GSAP",
        "value":"80",
        "itemClass":"skills-item cx3",
        "iconClass":"icon-social-javascript-outline",
        "bgClass":"bMain"
      }
    ]
  },
  {
    "key": 1,
    "num": "02",
    "cat": "philosophy",
    "title": "Творческий_процесс", 
    "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
    "img": "/img/s001.jpg",
    "itemClass": "slide-item",
    "titleClass": "cx4 hx6",
    "contentClass": "cx8 hx6 item",
    "bgClass": "item-bg",
    "items": [
      {
        "num": "01",
        "cat": "quality",
        "title": "Стремление к совершенству", 
        "subTitle": "внимание к деталям и постоянное саморазвитие", 
        "value": "90",
        "itemClass": "card cx4 cWhite",
        "iconClass":"icon-pulse x3",
        "bgClass":"bgLoad bMain"
      },
      {
        "num":"02",
        "cat":"creative",
        "title": "Креативный подход",
        "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
        "value":"80",
        "itemClass":"card cx4 cWhite",
        "iconClass":"icon-lightbulb-outline x3",
        "bgClass":"bgLoad bDark"
      },
      {
        "num": "03",
        "cat": "technology",
        "title": "Cовременные технологии",
        "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
        "value": "80",
        "itemClass":"card cx4 bWhite",
        "iconClass":"icon-nodejs",
        "bgClass":"bgLoad bDark"
      }
    ]
  }
  ]
}

let data = homeData;

const Home = (props) => (
  <PageLayout  {...data.head}>
    <Slider content={data.sections} />
  </PageLayout>
)

// 
const CSS_PREFIX = 'slider';
const getClassName = name => `${CSS_PREFIX}-${name}`;

const classRoot = CSS_PREFIX;
const classWrap = getClassName('wrapper');
const classItem = getClassName('item');
const classDots = getClassName('dots');

const SLIDE_ANM_TIME = 1200;
const SLIDE_ANM_DELAY = 800;
const SLIDE_ANM_EASING = "cubic-bezier(0.6, 0, 0.01, 0.99) ";
const SLIDE_ANM_TRANSITION = SLIDE_ANM_TIME + "ms " + SLIDE_ANM_EASING +  SLIDE_ANM_DELAY + "ms";
const SLIDE_ANM_TOTAL = SLIDE_ANM_TIME + SLIDE_ANM_DELAY +'ms';

class Slider extends React.Component {
  constructor(props) {  
    super(props);
    
    // Slider actions bind
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.slideTo = this.slideTo.bind(this);
    
    this.state = {
      slides: this.props.content,
      slidesCount: this.props.content.length,
      slideActive: 0
    }
  }
  
  propTypes: {
    slidesCount: React.PropTypes.number,
    slideActive: React.PropTypes.number,
  }

  componentDidMount() {
    this.state = {
      slides: this.props.content,
      slidesCount: this.props.content.length,
      slideActive: 0
    }
  }
  
  // Обработчик для навигации по слайдам. Используется в компоненте Dot, принимая в качестве аргумента атрибут 'data-target'
  // 1. Получаем атрибут 'data-target' и помещаем его в переменную 'targetTo'. Метод Number() преобразует значение переменной в число.
  // 2. Устанавливаем состояние 'slideActive' равным 'targetTo'.  
	slideTo(e) {
		e.preventDefault();
    // Step 1
		let targetTo = Number(e.currentTarget.getAttribute("data-target"));
    // Step 2
    this.setState({
      slideActive: targetTo
    });
	}
  
  // Обработчик для перехода к предыдущему слайду. Используется в качестве 'onClick' для кнопки 'btn--prev'
  // 1. Задаем переменнную prevIndex равную значению состояние 'slideActive' - '1'. Если полученное значение отрицательное задаем prevIndex равным индексу последнего слайда
  // 2. Устанавливаем состояние 'slideActive' равным 'prevIndex'.
  prevSlide() {
    // Step 1
    let prevIndex = this.state.slideActive - 1 < 0 ? this.state.slidesCount - 1 : this.state.slideActive - 1;
    // Step 2
    this.setState({
      slideActive: prevIndex
    });
  }
  
  // Обработчик для перехода к следующему слайду. Используется в качестве 'onClick' для кнопки 'btn--next'
  // 1. Задаем переменнную nextIndex равную значению состояние 'slideActive' + '1'. Если полученное значение больще индекса последнего слайда задаем nextIndex равным индексу первого слайда
  // 2. Устанавливаем состояние 'slideActive' равным 'nextIndex'.
  nextSlide() {
    let nextIndex = this.state.slideActive + 1 < this.state.slidesCount ? this.state.slideActive + 1 : 0;
    this.setState({
      slideActive: nextIndex
    });
  }
  
  getSlideWidth() {
    let slideWidth = 100/this.state.slidesCount+'%';
    return slideWidth
  }
  
  isActive(value){
    if(this.state.slideActive === value){
      return true;
    }
  }
  
  render() {

    let total = this.state.slidesCount;

    //const dots = this.renderDots(this.state.slides);
    
    const SN = this.state.slidesCount;
    const IDX = this.state.slideActive;
    const SH = '100%';
    const SW = SN*100+'%';
    const IW = 100/SN+'%';
    const MOVEX = -IDX*100/SN+"%";

    const styles = {
      width: SW,
      height: SH,
      transform: ("translate3d("+MOVEX+",0,0)"),
      transition: SLIDE_ANM_TRANSITION
    }
    
    const slides = this.state.slides.map((item, index) =>  
      <Content {...item} active={this.isActive(index)} count={index} total={total} />
    )
    
    const dots = this.state.slides.map((item, index) => {
        return (<Dot {...item} active={this.isActive(index)} target={index} onClick={this.slideTo} total={total}></Dot>  )
      }
    )

    return (
      <div className={classRoot}>
        <div className={classWrap} style={styles}>
          { slides }
        </div>
        <div className={classDots}>
          <div className="btn--prev" onClick={this.prevSlide}></div>
          { dots }          
          <div className="btn--next" onClick={this.nextSlide}></div>
        </div>
      </div>
    );
  }
}


class Dot extends React.Component {
  render() {
    
    return (
      <div className={"dot-item " + (this.props.active ? 'active':'' )} data-target={this.props.target} onClick={this.props.onClick}>
        <span className="dot-num">{this.props.num}</span>
        <span className="dot-label">{this.props.cat}</span>
      </div>
    );
  }
}

class Content extends React.Component {
   renderItems(items) {
    return items.map((item, index) => this.renderItem(item, index))
  }
  
  renderItem(item, index) {
    let style = {transitionDelay: (index+3) *500 + 'ms'}
    return (
      <Item key={index} {...item} style={style}/>
    )
  }
  
  render() {
  
    const itemStyles = {
      position: 'absolute',
      width: 100 / this.props.total + '%',
      height: '100%',
      top: 0,
      left: this.props.count * ( 100 / this.props.total ) + '%'
    }
    
    
    const	styleBg = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      zIndex: -1
    }
    
    const styles = {
      transform: "translate3d(0,"+ (this.props.active ? "0": "1em") + ",0)",
      transition: "transform 0.6s ease-out, opacity 0.6s",
      transitionDelay: this.props.active ? "2200ms, 2200ms": "0s, 0s",
      opacity: this.props.active ? "1": "0",
      zIndex: 100
    }

    const items = this.renderItems(this.props.items);

    return (
      <div className={this.props.itemClass + (this.props.active ? ' active':'' )} style={itemStyles}>
          <Title {...this.props} />
          <div className={this.props.contentClass} style={styles}>{items}</div>          
        <div className={this.props.bgClass} style={styleBg}></div>
      </div>
    );
  }
}

const Item = (props) => (
  <div className={props.itemClass}>
    <div className="item-num">
      <span className="num__current">{props.num}</span>
      <span className="num__total">04</span>
    </div>
    <div className="item-cat">{props.cat}</div>
    <i className={props.iconClass}></i>
    <div className="item-value">{props.value}</div>
    <h3>{props.title}</h3>
    <p>{props.subTitle}</p>
    <div className={props.bgClass} style={props.style} />
  </div>
)

export default Home;
