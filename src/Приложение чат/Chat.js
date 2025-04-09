import React, { useState } from 'react';

const ChatApp = () => {
  // Состояния для управления приложением
  const [activeTab, setActiveTab] = useState('chats'); // Активная вкладка
  const [selectedContact, setSelectedContact] = useState(null); // Выбранный контакт
  const [message, setMessage] = useState(''); // Сообщение для отправки
  const [chatHistory, setChatHistory] = useState({}); // История всех чатов

  // Моковые данные контактов
  const contacts = [
    { id: 1, name: 'Алексей', lastMessage: 'Привет! Как дела?', time: '12:30' },
    { id: 2, name: 'Мария', lastMessage: 'Документы готовы', time: '11:45' },
    { id: 3, name: 'Иван', lastMessage: 'Встречаемся в 18:00', time: '10:20' },
    { id: 4, name: 'Ольга', lastMessage: 'Спасибо за помощь!', time: '09:15' },
  ];

  // Обработчик выбора контакта
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    
    // Инициализируем историю чата, если её нет
    if (!chatHistory[contact.id]) {
      setChatHistory(prev => ({
        ...prev,
        [contact.id]: [
          { sender: contact.name, text: contact.lastMessage, time: contact.time }
        ]
      }));
    }
  };

  // Обработчик отправки сообщения
  const handleSendMessage = () => {
    if (message.trim() && selectedContact) {
      const newMessage = {
        sender: 'Вы',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      
      
      setChatHistory(prev => ({
        ...prev,
        [selectedContact.id]: [...(prev[selectedContact.id] || []), newMessage]
      }));


      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Боковая панель с вкладками */}
      <div style={{
        width: '300px',
        backgroundColor: '#2c3e50',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Заголовок */}
        <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #34495e' }}>
          <h2>Мой Мессенджер</h2>
        </div>
        
        {/* Вкладки */}
        <div style={{ display: 'flex', borderBottom: '1px solid #34495e' }}>
          <button 
            style={{
              flex: 1,
              padding: '15px',
              backgroundColor: activeTab === 'profile' ? '#34495e' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('profile')}
          >
            Профиль
          </button>
          <button 
            style={{
              flex: 1,
              padding: '15px',
              backgroundColor: activeTab === 'chats' ? '#34495e' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('chats')}
          >
            Чаты
          </button>
          <button 
            style={{
              flex: 1,
              padding: '15px',
              backgroundColor: activeTab === 'settings' ? '#34495e' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('settings')}
          >
            Настройки
          </button>
        </div>
        
        {/* Контент вкладок */}
        <div style={{ flex: 1, overflow: 'auto' }}>
          {activeTab === 'profile' && (
            <div style={{ padding: '20px' }}>
              <h3>Мой профиль</h3>
              <div style={{ marginTop: '20px' }}>
                <p>Имя: Пользователь</p>
                <p>Статус: онлайн</p>
                <p>Email: user@example.com</p>
              </div>
            </div>
          )}
          
          {activeTab === 'chats' && (
            <div>
              {contacts.map(contact => (
                <div 
                  key={contact.id}
                  style={{
                    padding: '15px',
                    borderBottom: '1px solid #34495e',
                    backgroundColor: selectedContact?.id === contact.id ? '#34495e' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleContactSelect(contact)}
                >
                  <div style={{ fontWeight: 'bold' }}>{contact.name}</div>
                  <div style={{ fontSize: '0.8em', color: '#bdc3c7' }}>{contact.lastMessage}</div>
                  <div style={{ fontSize: '0.7em', color: '#7f8c8d', textAlign: 'right' }}>{contact.time}</div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div style={{ padding: '20px' }}>
              <h3>Настройки</h3>
              <div style={{ marginTop: '20px' }}>
                <p>Уведомления: Вкл</p>
                <p>Тема: Темная</p>
                <p>Конфиденциальность: Стандартная</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Область чата */}
      {activeTab === 'chats' && selectedContact ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Заголовок чата */}
          <div style={{
            padding: '15px',
            backgroundColor: '#ecf0f1',
            borderBottom: '1px solid #bdc3c7',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {selectedContact.name}
            </div>
          </div>
          
          {/* История сообщений */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflow: 'auto',
            backgroundColor: '#fff'
          }}>
            {chatHistory[selectedContact.id]?.map((msg, index) => (
              <div 
                key={index}
                style={{
                  marginBottom: '15px',
                  textAlign: msg.sender === 'Вы' ? 'right' : 'left'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  borderRadius: '15px',
                  backgroundColor: msg.sender === 'Вы' ? '#3498db' : '#ecf0f1',
                  color: msg.sender === 'Вы' ? 'white' : 'black',
                  maxWidth: '70%'
                }}>
                  {msg.text}
                </div>
                <div style={{
                  fontSize: '0.7em',
                  color: '#7f8c8d',
                  marginTop: '5px'
                }}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>
          
          {/* Поле ввода сообщения */}
          <div style={{
            padding: '15px',
            backgroundColor: '#ecf0f1',
            display: 'flex',
            borderTop: '1px solid #bdc3c7'
          }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите сообщение..."
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #bdc3c7',
                marginRight: '10px'
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              Отправить
            </button>
          </div>
        </div>
      ) : (
        // Пустая область, если чат не выбран
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{ textAlign: 'center', color: '#7f8c8d' }}>
            <h3>Выберите чат для начала общения</h3>
            <p>или создайте новый диалог</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;