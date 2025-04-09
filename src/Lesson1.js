// Cсоздаем компанент
function Myheader({name, age, theme}){

console.log({name})
    //Возвращаем JSX код
    return(
      
        <div>
     
        <h1>Myheader {name} {age}</h1>
      </div>
    )
   }
  
  // const Myheader = () => {
     
  
  //  }

  export default Myheader