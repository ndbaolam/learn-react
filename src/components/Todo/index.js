import { useEffect, useState } from 'react';
import './Todo.scss';

export default function Todo(){
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.inputTodo;
    const item = input.value;
    setData([...data, item]);
    input.value = '';
  }

  const handleClick = (e) => {
    data[e.target.id] = '';
    setData([...data]);
  }

  useEffect(() => {
    const inputTodo = document.querySelector('.Todo__form__input');
    inputTodo.focus();
  }, []);

  return (
    <>
      <div className="Todo">
        <div>
          <form className="Todo__form" onSubmit={handleSubmit}>
            <input className="Todo__form__input" name="inputTodo" placeholder="Todo list ..."/>
            <button className="Todo__form__btn">Add</button>
          </form>
        </div>

        <div>
          <ul className="Todo__list">
            {data.map((item, index) => { return item !== "" && (
              <li className="Todo__list__item" key={index}>
                {item}
                <button className='Todo__list__item__btn' onClick={handleClick} id={index}>x</button>
              </li>
            )})}
          </ul>
        </div>
      </div>
    </>
  )
}