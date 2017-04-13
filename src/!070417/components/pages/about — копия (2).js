import React from 'react';
import PageLayout from '../page-layout';

const aboutData = {
	head: {
    title: "Немного_о себе",
    subTitle: "Web-дизайнер и FrontEnd-разработчик",
    id: "2", num: "02", cat: "about" 
  },
  items: [
    {
      key: 0, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "01", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg"
    },{
      key: 1, 
      title: "Креативный подход", 
      subTitle: "Свежие и неповторимые идеи в каждом проекте", 
      num: "02", cat: "creative", img:"/img/slide__02.jpg",  cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bMain"
    },{
      key: 2, 
      title: "Cовременные технологии", 
      subTitle: "Максимум производительности, минимум кода", 
      num: "03", cat: "technology", img:"/img/slide__03.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bLight"
    },{
      key: 3,
      title: "Внимание к деталям",
      subTitle: "Web-дизайнер и FrontEnd-разработчик",
      num: "04", cat: "quality", img:"/img/slide_04.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 imgBg"
    }
  ]
}

let data = aboutData;

const About = (props) => (
  <PageLayout  {...data.head}>      
    <XSlider {...data} className="xSlider" />
  </PageLayout>
)



class XSlider extends React.Component {
  constructor(props) {
    super(props);
    // XSlider actions bind
    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);    
    this.loadState = this.loadState.bind(this);
    this.slideTo = this.slideTo.bind(this);
    
    this.state = {
      counter: 0,
      totalItems: 0,
      anmState: 'loading',
      timeout: setTimeout(this.loadState,  this.props.loadTime)
    }
  }

  loadState() { 
    this.setState({ anmState: 'loaded'})
  }
  
  // Обработчик для навигации по слайдам. Используется в компоненте Dot, принимая в качестве аргумента атрибут 'data-target'
	slideTo(e) {
		e.preventDefault();
    // Получаем значение атрибута 'data-target' и помещаем его в переменную 'targetTo'
		const targetTo = e.currentTarget.getAttribute("data-target");    
    this.setState({
      counter: Number(targetTo) 
    });
	}

  prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.items.length - 1 : this.state.counter - 1;
    this.setState({
      counter: prevItem,
      anmState: 'loading prev',
      timeout: setTimeout(this.loadState,  this.props.loadTime )
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.items.length ? this.state.counter + 1 : 0;
    this.setState({
      counter: nextItem,
      anmState: 'loading next',
      timeout: setTimeout(this.loadState, this.props.loadTime)
    });
  }
  
  render() {
    const items = this.renderItems(this.props.items);
    const dots = this.renderDots(this.props.items);
    
    const OPTIONS = {
      TOTAL: this.props.items.length,
      INDEX: this.state.counter
    }
    const styles = {
      width: OPTIONS.TOTAL*100+'%',
      height: '100%',
      transform: ("translate3d(-"+this.state.counter*100+"%,0,0)"),
      transition: "0.8s ease-in-out"
    }
    
    return (
      <div className={"xSlider " + this.state.anmState}>
        <div className="xSlider-wrap" style={styles}>
          { items }
        </div>
        <div className="xSlider-dots">
          { dots }
        </div>
        <div className="btn--prev" onClick={this.prevItem}></div>
        <div className="btn--next" onClick={this.nextItem}></div>
      </div>
    );
  }

  renderItems(items) {
      return items.map((item, index) => this.renderItem( item, (this.state.counter === index), index)
    );
  }
  
  renderItem(item, current, index) {
    return <XSlideItem {...item} current={current} count={index}></XSlideItem> 
  }
  
  renderDots(items) {
    return items.map((item, index) => this.renderDot( item, (this.state.counter === index), index))
  }
  renderDot(item, current, index) {
    return <Dot {...item} current={current} target={index} onClick={this.slideTo} ></Dot>  
  }
  
}

class XSlideItem extends React.Component {

  render() {  
    let [firstWorld, ...secWorld] = this.props.title.split(" ")
    let	styleBg = {
      backgroundImage: 'url(' + this.props.img + ')'
    }
    const OPTIONS = {
      TOTAL: this.props.item.length,
      INDEX: this.state.count
    }
    const styles = {
      left: this.props.count*100 + '%',
      transform: ("translate3d("+(this.props.current ? 0 : this.props.count*10 )+"em,0,0)"),
      transition: "transform 2s ease-out 0s, opacity 0.5s 0.5s"
    }
    return (
      <div className={"slider-item " + (this.props.current ? 'current':'' )} style={styles}>        
        <div className="slider-title">
          <div className="title-num">
            <span className="num__current">{this.props.num}</span>
            <span className="num__total">04</span>
          </div>
          <div className="title-cat">
            <span className="cat__label">SN</span>
            <span className="cat__value">{this.props.cat}</span>
          </div>
          <div className="title-text">
            <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
            <p>{this.props.subTitle}</p>
            <div className="line"></div>
          </div>
          <div className="bg__mask"><div className="mask__inner" style={styleBg}></div></div>
        </div>
        <div className="slider-bg" style={styleBg}></div>
      </div>
    );
  }
}
class Dot extends React.Component {
  render() {
    const styles = {
      left: this.props.target*25 + '%'      
    }
  
    return (
      <div className={"xSlider-dot " + (this.props.current ? 'active':'' )} data-target={this.props.target} onClick={this.props.onClick} style={styles}>
        <span className="slide-num">{this.props.num}</span>
      </div>
    );
  }
}
export default About;
