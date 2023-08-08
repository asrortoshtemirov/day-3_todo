import React from "react";
import { Form } from "../form";

export const Card =({user_age,user_name,setData,id})=>{
  const [input,setInput] = React.useState(false)
  const deleteItem = ()=>{
    setData((p) => p.filter((item)=>item.id !== id))
  }
  return (
    <div className="" style={{border:"2px solid red",maxWidth:"400px",marginBottom:"10px",borderRadius:"20px",marginLeft:"550px"}}>
      {input ? (
        <Form setInput={setInput} setData={setData} id={id} dValue={{user_name,user_age}}/>
      ) : (
        <div style={{marginLeft:"20px",marginBottom:"15px"}}>
          <h1>{user_name}</h1>
          <p>{user_age}</p>
          <button onClick={deleteItem}>Delete</button>
          <button onClick={()=>setInput(true)}>Edit</button>
        </div>
      )}
    </div>
  )
}