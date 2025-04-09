// Cсоздаем компанент
function DivChilde({children}){

    console.log({children})
        //Возвращаем JSX код
        return(
          
            <div>
         
            <h1 style={{FontSize:"50px;"}}>DivChilde {children} </h1>
          </div>
        )
       }
      
      // const Myheader = () => {
         
      
      //  }
    
      export default DivChilde