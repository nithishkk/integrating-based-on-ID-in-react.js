import React,{useState} from "react";
import "./style.css";
const data=["nithish","meghana"]
export default function App() {
  const[data,setData]=useState(99)
  function Submit(e){
    setData(e.currentTarget.id)
    console.log(e.currentTarget.id,"id")

  }
  return (
    <div>
      {data}
      <h1>Hello StackBlitz!</h1>
      <button id="data" onClick={(e)=>Submit(e)}
      
      > update</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
