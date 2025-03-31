import React, { useState, useCallback } from 'react';

function Myptactic() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [robotMessage, setRobotMessage] = useState('');

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
    </div>
  );
}

export default Myptactic;