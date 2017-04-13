import React from 'react';

const Form = (props) => (
  <div id="cta" className={props.className}>
    <div className="head">
      <h3>Написать мне</h3>
      <p>Хотите предложить проект или получить ответ на вопрос? Вам сюда</p>
      <div className="btn--close" onClick={props.onClick}><span></span></div>
    </div>
    <form className='body'>
    <div className="form-group">
				  <input type="text" name="name" placeholder="Имя" className="name" data-error="Ваше имя." />
				</div>
				<div className="form-group">
				  <input type="text" name="text" placeholder="Вопрос" className="mail" data-error="Задайте вопрос"/>
				</div>
				<button className="btn--submit" type="submit">Отправить</button>
    </form>	
  </div>
)

export default Form;