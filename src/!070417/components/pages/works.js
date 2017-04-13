import React from 'react';
import PageLayout from '../page-layout';

const worksData = {
	head: {
    title: "Проекты и_эксперименты",
    subTitle: "Богатый опыт работы в проектах разного уровня сложности",
    num: "03", cat: "works", id:"3"
  },
  items: [
    {
      key: 0, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "01", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg"
    },
    {
      key: 1, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "02", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg"
    }
  ]
}

let data = worksData;
const CSS_PREFIX = 'backgroundSlider';
const ITEMS = [ '0', '1', '2' ];

const getClassName = name => `${CSS_PREFIX}-${name}`;

const VisualSlider = props => {
  const x = 100 * props.idx;
  const styles = {
    transform: `translate3d(${x}%, 0, 0)`,
    width: `${100 / props.num}%`,
  };

  return (
    <div
      style={styles}
      className={getClassName('visual-slider')}
    />
  );
};

const Options = props => {
  const classes = getClassName('options');
  const classesOption = getClassName('option');
  const classesItem = getClassName('item');
  const styles = {
    width: `${100 / props.num}%`,
  };

  return (
    <div className={classes}>
      {props.items.map((item, idx) => {
        const onHover = props.onHover(idx);
        
        return (
          <div style={styles} className={classesOption} onMouseOver={onHover}>
            <div className={classesItem}>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

class BackgroundSlider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      idx: 0,
      current: 0,
      num: ITEMS.length,
    };
    this._boundOnIndexChange = this.onIndexChange.bind(this);
    this._boundOnClick = this.onIndexClick.bind(this);
  }
  
  onIndexChange(idx) {
    return () => this.setState({ idx });
  }
  
  onIndexClick(current) {
    return () => this.setState({ current });
  }
  
  render() {
    const { state } = this;

    return (
      <div className="backgroundSlider">
        <VisualSlider {...state} />
        <Options {...state} items={ITEMS} onHover={this._boundOnIndexChange} onclick={this._boundOnClick}/>
      </div>
    );
  }
}

const Works = (props) => (
  <PageLayout {...data.head}>
   <BackgroundSlider />
  </PageLayout>
)

export default Works;