// // Cсоздаем компанент
import { useEffect, useState, useCallback  } from 'react';  // Импорт состояния в основной файл реакт


const Visible = ({ data }) => {

  const [isVisible, setIsVisible] = useState(true);

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
  
    const increment = useCallback(() => {
      setCount(count + 1);
      
    }, [count]); // Зависимость от count
  
   

    const changeCount = useCallback(() => {
      // здесь переменная count всегда равна 0,
      // т.к. коллбэк не обновляется при ее изменении
      console.log(count("collbak"));
      }, [count]);
  
//ХУК effect
// принимает функцию и массив зависимостей
useEffect(()=>{
  //setTimeout - это функция в JavaScript, которая позволяет выполнить 
  // код через определенный промежуток времени. внутри функция и 1000 милисекунд через сколько вызывать
  console.log("update обновился компонент при изменении data");
  setTimeout(()=>{ console.log('effect') }, 1000)

   },[data])

  return (
    <div >
    <p style={{ opacity: isVisible ? 1 : 0 }} onClick={() =>{setIsVisible(p => !p)}}>{data}VIS</p>
    <p>Count: {count}</p>
     <button onClick={increment}>Увеличить</button>
     <input 
       value={value} 
       onChange={(e) => setValue(e.target.value)} 
     />
    
    </div>
                                                          // {setIsVisible(p => !p)} здесь мы напрямую меняем значение 
                                                          // isVisible p это текущее состояние !p это обновленное состояние
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



export default Visible;




