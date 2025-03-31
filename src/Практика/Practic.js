
import React, { useState } from 'react'; //импортируем useStbate

function Mybot() { //Cоздали компонент
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
// formData – это объект состояния, который хранит данные формы:
// username – для имени пользователя (изначально пустая строка '').
// email – для email (изначально пустая строка '').
// setFormData – функция для обновления состояния.


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Динамическое обновление поля по его `name`
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
  };
//вывели значения в консоль

  return (
    <div>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Имя пользователя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Отправить</button>

      <p>{formData.email}</p>
      <p>{formData.username}</p>
    </div>
  );
}

export default Mybot;

// Поля ввода (input):

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
