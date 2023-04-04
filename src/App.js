import React,{useState} from "react";
import "./style.css";
const data=['nithish']
export default function App() {
 const[name,setName]=useState(false)
  const[data,setData]=useState(99)
  function Submit(e){
    if(e.currentTarget.id){
      setData(e.currentTarget.id)
      // setName(false)
       setName(e.currentTarget.id)
    } else {
      setName(false)
    }
   
    console.log(e.currentTarget.id,"id")

  }
  return (
    <div>
      {data}
      <h1>Hello StackBlitz!</h1>
      <button id='true' onClick={(e)=>Submit(e)}
      
      > update</button>
      {name && <p>Start editing to see some magic happen :)</p>}
  
    </div>
  );
}
