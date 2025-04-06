// // Cсоздаем компанент
import { useEffect, useState, useCallback  } from 'react';  // Импорт состояния в основной файл реакт
// Cсоздаем компанент
function Myrobot ({}){

  
    //Возвращаем JSX код
    return(
      
        <div>
     
        <h1> <p>УРОК №3</p>
            <RenderTreeChilde1/>
            <RenderTreeChilde2/>
             </h1>
      </div>
    )
   }

   const  RenderTreeChilde1 =() =>{
    const [state, setState] = useState(false)
    console.log('childe1')
    return(
        <button onClick={()=>{setState(p => !p)}}>
            CHILDE1
        </button>
    )
   }

   const  RenderTreeChilde2 =() =>{
    const [state, setState] = useState(false)
    console.log('childe2')
    return(
        <div>
        <button onClick={()=>{setState(p => !p)}}>
            CHILDE2
        </button>
        {state ? <RenderTreeChilde3/> : <p> Другой тип тега</p>}
        <RenderTreeChilde4/>
        </div> 
    )
   }

   const  RenderTreeChilde3 =() =>{
 useEffect(()=>{
    console.log('childe3')
 },[])
    
    return(
       <h1>CHILDE3 саб чайлд</h1>
    )
   }

   const  RenderTreeChilde4 =() =>{
    const [classesName, setClasses] = useState("default")
    useEffect(()=>{
       console.log('childe4')
    },[])
       
       return(
           <div>
          <h2 className={classesName} id = "child4">CHILDE4 саб чайлд</h2>
          <button onClick={()=>{setClasses("change")}}>Изменить имя класса</button>
          {
            ["a","b"].map((e,i) =><div key={i}> {e}</div>)
          }
          </div>
       )
      }
  
  // const Myheader = () => {
     
  
  //  }

  export default Myrobot