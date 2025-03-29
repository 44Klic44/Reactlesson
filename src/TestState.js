// // Cсоздаем компанент
import { useEffect, useState } from 'react';  // Импорт состояния в основной файл реакт


const Visible = ({ data }) => {

  const [isVisible, setIsVisible] = useState(true);

  
  console.log("update");
  
//ХУК effect
// принимает функцию и массив зависимостей
useEffect(()=>{
  //setTimeout - это функция в JavaScript, которая позволяет выполнить 
  // код через определенный промежуток времени. внутри функция и 1000 милисекунд через сколько вызывать

  setTimeout(()=>{ console.log('effect') }, 1000)

   },[data])

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} onClick={() =>{setIsVisible(p => !p)}}>{data}VISIBLE</div>
                                                          // {setIsVisible(p => !p)} здесь мы напрямую меняем значение isVisible p это текущее состояние !p это обновленное состояние
                                                          // Равнасильно коду ниже
                                                          // onClick={() => {
                                                          //   if (isVisible === true) {
                                                          //     setIsVisible(false);
                                                          //   } else {
                                                          //     setIsVisible(true);
                                                          //   }
                                                          // }}
  );
};


// function MessagesList() {
//   const [messages, setMessages] = useState([

//     "message 1",
//     "message 2",
//     "message 3",

//   ]);
//   return messages.map((messages)=> <div>{messages}</div>
// ); }

export default Visible;




  //   //Возвращаем JSX код
  //   return(
      
  //       <div>
     
  //       <h1>Mystate {name} {age}</h1>
  //     </div>
  //   )
  //  }
  
  // // const Myheader = () => {
     
  
  // //  }
