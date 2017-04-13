import React from 'react';

const Form = (props) => (
  <div id="cta" className={props.className}>
    <div className="head">
      <h3>Написать мне</h3>
      <p>Хотите предложить проект или получить ответ на вопрос? Вам сюда</p>
    </div>
    <form className='body'>
    <div className="form-group">
				  <input type="text" name="name" placeholder="Имя" className="form-control" data-error="Ваше имя." />
				  <div className="help-block with-errors"></div>
				</div>
				<div className="form-group">
				  <input type="email" name="email" placeholder="Email" className="form-control" data-error="Некорректный email адрес"/>
				  <div className="help-block with-errors"></div>
				</div>
				<button className="button" type="submit">Отправить</button>
    </form>	
  </div>
)

export default Form;