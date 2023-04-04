import React,{useState} from "react";
import "./style.css";
const d=[
  { id:1,
    name:"nithish"

  },
  {
    id:2,
    name:"Meghana"

  },
{
  id:3,
  name:"sonu"

}
]
  
export default function App() {
  const[love,setLove]=useState('')
  const[nithish,setNithish]=useState('')
 const[name,setName]=useState(false)
  const[data,setData]=useState(99)
  function Submit(e,n){
    console.log(n,"gg")
  if(n==="love")
      setLove(n)

    
    if(e.target.value){
      setData(e.currentTarget.value)
      // setName(false)
       setName(e.currentTarget.value)
    } else {
      setName(false)
    }
   
    console.log(e.target.value,"id")

  }
  return (
    <div>
      
      {data}
      <h1>Hello StackBlitz!</h1>
      {love}
     {d.map((item,index)=>{
    return(
      <button id='true' value={nithish} onClick={(e)=>Submit(e,item.name==='sonu' ?'love':"lover")} > update</button>
    )
      
     })}
     
      
    
      {love&& <p>i love you forver :)</p>}
  
    </div>
  );
}
// onChange={(e) => {
//   onChangeRequestAmount(e, owner_id);
// }}