import React from "react";
import "../form/form.css"

export const Form = ({setData,dValue,id,setInput}) => {
  const [inputValue, setInputValue] = React.useState(dValue ? dValue : {
    user_name:"",
    user_age:"",
  });

  const submit = (e)=>{
    e.preventDefault();
    if (!id) {
      setData((prev)=>([...prev,{...inputValue,id:Date.now()}]))
      setInputValue({
        user_name:"",
        user_age:"",
      });
      return;
    }
    setData((p)=>p.map((item)=>(item.id === id ? {...inputValue,id}:item)));
    setInput(false);
  }
  const changeInput = (e)=>{
    setInputValue((p)=>({...p,[e.target.name]:e.target.value}))
  }

  return (
    <form className="form" onSubmit={submit} style={{marginBottom:"5px"}}>
      <div style={{marginBottom:"5px"}}>
        <input className="inputs"
          onChange = {changeInput}
          value = {inputValue.user_name}
          placeholder="Name"
          autoComplete="off"
          type="text"
          name="user_name"/>
      </div>
      <div style={{marginBottom:"5px"}}>
        <input className="inputs"
          onChange = {changeInput} 
          value = {inputValue.user_age} 
          placeholder="Age" 
          autoComplete="off"
          type="text" 
          name="user_age"/>
      </div>
      <button className="btn" type="submit">{id ? "Edit" : "Send"}</button>
    </form>
  )
}