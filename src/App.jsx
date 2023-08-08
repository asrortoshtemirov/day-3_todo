import React from "react";
import { Form } from "./components/form";
import { Card } from "./components/card";

function App() {
  const [data, setData] = React.useState([]);
  console.log(data);
  return (
    <div>
      <Form setData={setData}/>
      {data.map((el)=>(
        <Card key={el.id} setData={setData} {...el} />
      ))}
    </div>
  )
}

export default App
