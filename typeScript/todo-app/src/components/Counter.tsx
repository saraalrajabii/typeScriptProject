import { ReactNode } from "react"

type CounterProps ={

    setCount : React.Dispatch<React.SetStateAction<number>> , 
    children : ReactNode

    
}

export const Counter =({setCount ,children } :CounterProps)=>{


     return(
        <>
         
           <button onClick={()=>setCount(prev=>prev+1)}>+</button>
           <h1>{children}</h1> 
           <button onClick={()=>setCount(prev=>prev -1)}>-</button>

        
        </>
     )
}