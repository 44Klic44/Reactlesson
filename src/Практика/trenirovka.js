import React, { useState, useCallback } from 'react';
// Здесь мы импортируем необходимые хуки из React:
// useState - для управления состоянием компонента
// useCallback - для мемоизации функций и оптимизации производительности

function Myptactic() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });



  const [submittedData, setSubmittedData] = useState(null);
  const [robotMessage, setRobotMessage] = useState('');
  // submittedData - будет хранить последние отправленные данные
 // robotMessage - для хранения сообщения от "робота"


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const showRobotMessage = useCallback(() => {
    setTimeout(() => {
      setRobotMessage('Робот говорит: Ваши данные успешно обработаны!');
    }, 1500); // 1500 миллисекунд = 1.5 секунды
  }, []);

// useCallback мемоизирует функцию, чтобы она не создавалась заново при каждом рендере
// setTimeout устанавливает задержку 1500 мс (1.5 сек) перед показом сообщения
// Пустой массив зависимостей [] означает, что функция создается только один раз


  const handleSubmit = () => {
    // Сохраняем введенные данные перед очисткой
    setSubmittedData({ ...formData });
    
    // Очищаем поля формы
    setFormData({
      username: '',
      email: '',
    });
    
    // Показываем сообщение от робота с задержкой
    showRobotMessage();
    
    // Очищаем предыдущее сообщение робота
    setRobotMessage('');
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

      {/* Выводим текущие значения в реальном времени */}
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>

      {/* Блок с отправленными данными */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Отправленные данные:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Username: {submittedData.username}</p>
        </div>
      )}

      {/* Сообщение от робота */}
      {robotMessage && (
        <div style={{ marginTop: '20px', color: 'blue', fontStyle: 'italic' }}>
          {robotMessage}
        </div>
      )}
      {/* Логическое выражение &&: Это стандартный JavaScript-паттерн "логическое И"
          Если robotMessage содержит любое "истинное" значение 
          (не пустая строка, не null, не undefined), 
          то будет выполнено (отрендерено) то, что справа от && */}

      
    </div>
  );
}

export default Myptactic;