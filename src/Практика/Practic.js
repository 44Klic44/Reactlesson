
import React, { useState } from 'react'; //импортируем useStbate

function Mybot() { //Cоздали компонент
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });


  const [update, setUpdate] = useState(null)
  const [robot, setRobot] = useState('')
  const robotmassege = "ROBOT ОТВЕТИЛ"
// formData – это объект состояния, который хранит данные формы:
// username – для имени пользователя (изначально пустая строка '').
// email – для email (изначально пустая строка '').
// setFormData – функция для обновления состояния.


  const handleChange = (e) => {
    const { name, value } = e.target;//деструктуризация поля инпут достаем название поля и значение и передаем в обьект полям
    setFormData({
      ...formData,// берем старые зачения и копируем добавляя новые значения оператор спред
      [name]: value, // Динамическое обновление поля по его `name` 
      // Эта запись равно [name]: value // Эквивалентно { username: "John" }
       // name — это строка, полученная из e.target.name (например, "email" или "password").
       // Квадратные скобки [] позволяют использовать значение переменной name как ключ объекта.
      // value — это значение, которое будет присвоено этому ключу.
    });
  };
// e.target – элемент, в котором произошло изменение (инпут).
// name value – деструктуризация из e.target:
// name – атрибут name инпута (username или email).
// value – введённый текст.
// ...formData – оператор spread, копирует текущее состояние.
// [name]: value – динамически обновляет поле по его имени.


  const handleSubmit = () => { // Выводим текущее состояние формы
    console.log(formData); // { username: "...", email: "..." }



//отчищаем поля после отправки
    setFormData({
      username: '',
      email: '',
    })

    // вывдеме введенные ранее значения в поля
setUpdate({
  ...formData
  });
  
 // Ответ робота
  setTimeout(()=>{
    console.log(robotmassege)
    setRobot("ROBOT OTVET")
  }, 1500)
  };


  


//вывели значения в консоль

  return (
    <div>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}//когда мы убираем фокус из инпута перестаем вводить символы срабатывает наша функция handleChange
        placeholder="Имя пользователя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleSubmit}><p>Отправить</p></button>
{update && (

<div> <p>{update.email} </p> <p>{update.username}</p>  </div>
)}

{robot && (

<div> <p>{robot } </p>  </div>
)}
      {/* <p>{formData.email}</p>
      <p>{formData.username}</p> */}
    </div>
  );
}

export default Mybot;

// Поля ввода (input)
// name="username" и name="email" – определяют, какое поле обновлять.
// value={formData.username} – значение привязано к состоянию.
// onChange={handleChange} – вызывает handleChange при вводе.
// Кнопка (button):
// onClick={handleSubmit} – при клике выводит данные формы.
// 🔹 Как это работает?
// Пользователь вводит текст в поле username → срабатывает handleChange.
// handleChange обновляет formData.username.
// Аналогично для поля email.
// При клике на кнопку handleSubmit выводит актуальные данные.
