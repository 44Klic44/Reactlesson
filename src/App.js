import logo from './logo.svg';
import './App.css';
import Myheader from './Message';
import { useState } from 'react';
// import Mystate from './TestState';
import Visible from './TestState';



function App() {
  // Ниже рендер  массива начало
  const [arr, setArr] = useState([

    "message 1",
    "message 2",
    "message 3",
    "message 4",
  ])
  // Ниже рендер  массива конец



  const [count, setCount] = useState(0)
// в count храниться состояние
// в setCount храниться функция которая будет изменять остояние
//В useState(0) задаем значение для первого состояния когда загружается страница 
console.log('render')

  console.log(<Myheader name = {"ALEX"}/>)

  const name =" РОМАН"
  const theme = "light"

 

  return (


    <div className="App">



{/* //Практика начало */}








    
{/* //Практика конец */}




{/* Ниже рендер массива */}
     {arr.map((e,i)=> <div key={i}>{e}</div>) }

      <div><Visible data={"ПО "}/></div>
        {/*  в count храниться состояние */}
      <p>{count}</p>
      {/*  кнопка с функцией по клику изменяет состояниеи плюсует +1 к предыдущему состоянию  */}
      <button onClick={()=>{setCount(prevstate => ++prevstate)}}>Инкремент</button>

       {/* вызывыем наш созданный компонент внутри кода 'это компонент из файл MyMessege */}
        <Myheader name = {"ALEX"} age = {26} theme="theme"/>
   
       


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1></h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         ПРИВЕТ{name}
        </a>
      </header>
    </div>
  );
}

export default App;




