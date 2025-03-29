
import React, { useState } from 'react'; //импортируем useStbate

// value – введённый текст.

// ...formData – оператор spread, копирует текущее состояние.

// [name]: value – динамически обновляет поле по его имени.

// Пример:
// Если вводим "Alex" в поле username, то:

// javascript
// Copy
// setFormData({
//   ...formData,  // { username: '', email: '' }
//   username: 'Alex',  // Обновляем только username
// });
// 3. Обработчик отправки (handleSubmit)
// javascript
// Copy
// const handleSubmit = () => {
//   console.log(formData);  // Выводим текущее состояние формы
// };
// При клике на кнопку выводит в консоль объект formData:

// javascript
// Copy
// { username: "Alex", email: "alex@example.com" }
// 4. Рендеринг формы (JSX)
// jsx
// Copy
// return (
//   <div>
//     <input
//       type="text"
//       name="username"
//       value={formData.username}
//       onChange={handleChange}
//       placeholder="Имя пользователя"
//     />
//     <input
//       type="email"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//       placeholder="Email"
//     />
//     <button onClick={handleSubmit}>Отправить</button>
//   </div>
// );
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

// 🔹 Ключевые моменты
// Управляемые компоненты – значения инпутов контролируются React (value={formData.field}).

// Динамическое обновление – один обработчик handleChange для всех полей благодаря name.

// Иммутабельность – при обновлении состояния создаётся новый объект (...formData).









import React, { useState } from 'react';

function Mybot() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Динамическое обновление поля по его `name`
    });
  };

  const handleSubmit = () => {
    console.log(formData); // { username: "...", email: "..." }
  };

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
    </div>
  );
}

export default Mybot;
